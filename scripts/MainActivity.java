package com.katabba.skdcpns;

import android.content.ContentResolver;
import android.content.ContentValues;
import android.content.Intent;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.pm.Signature;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.provider.MediaStore;
import android.provider.Settings;
import android.view.View;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;

import androidx.core.content.FileProvider;

import com.getcapacitor.BridgeActivity;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.security.MessageDigest;
import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.json.JSONObject;
import java.nio.charset.StandardCharsets;

public class MainActivity extends BridgeActivity {
    private boolean fileBridgeAdded = false;
    private volatile boolean updating = false;
    private final AtomicBoolean batalUnduh = new AtomicBoolean(false);

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        addFileBridge();
        bersihkanSisaUpdate();
    }

    @Override
    public void onStart() {
        super.onStart();
        addFileBridge();
        applyWebViewTweaks();
    }

    // Menyediakan window.SkdFiles untuk halaman web: simpan file backup ke Download/SKD CPNS.
    private void addFileBridge() {
        if (fileBridgeAdded || getBridge() == null) return;
        WebView wv = getBridge().getWebView();
        if (wv == null) return;
        wv.addJavascriptInterface(new FileSaver(), "SkdFiles");
        wv.addJavascriptInterface(new Updater(), "SkdUpdater");
        fileBridgeAdded = true;
    }

    private class FileSaver {
        // Mengembalikan "OK:<lokasi>" kalau berhasil, atau "ERR:<alasan>" kalau gagal
        // (halaman web lalu memakai menu bagikan sebagai cadangan).
        @JavascriptInterface
        public String saveToDownloads(String fileName, String content) {
            try {
                if (Build.VERSION.SDK_INT < Build.VERSION_CODES.Q) {
                    return "ERR:android-lama";
                }
                String safe = fileName == null ? "" : fileName.replaceAll("[^A-Za-z0-9._-]", "_");
                if (safe.isEmpty()) return "ERR:nama-file-kosong";
                byte[] data = (content == null ? "" : content).getBytes(StandardCharsets.UTF_8);
                ContentResolver resolver = getContentResolver();
                ContentValues values = new ContentValues();
                values.put(MediaStore.MediaColumns.DISPLAY_NAME, safe);
                values.put(MediaStore.MediaColumns.MIME_TYPE, "application/json");
                values.put(MediaStore.MediaColumns.RELATIVE_PATH, Environment.DIRECTORY_DOWNLOADS + "/SKD CPNS");
                Uri uri = resolver.insert(MediaStore.Downloads.EXTERNAL_CONTENT_URI, values);
                if (uri == null) return "ERR:insert-gagal";
                OutputStream os = resolver.openOutputStream(uri);
                if (os == null) return "ERR:stream-null";
                try {
                    os.write(data);
                    os.flush();
                } finally {
                    os.close();
                }
                return "OK:Download/SKD CPNS/" + safe;
            } catch (Exception e) {
                return "ERR:" + e.getClass().getSimpleName();
            }
        }
    }


    // ===== Pembaruan di dalam aplikasi (GitHub Releases) =====
    // Alur: JS memeriksa rilis terbaru -> panggil downloadAndInstall -> unduh ke cache (dengan progres, bisa dibatal)
    // -> cek ukuran + SHA-256 -> cek tanda tangan sama dengan aplikasi terpasang -> buka installer Android.
    // Android tidak mengizinkan instal senyap di luar Play Store, jadi pengguna tetap menekan "Pasang" sekali.
    private static final Pattern NAMA_APK = Pattern.compile("SKD-CPNS-(\\d+)\\.apk");

    private static boolean urlDiizinkan(String u) {
        try {
            Uri uri = Uri.parse(u);
            String h = uri.getHost() == null ? "" : uri.getHost().toLowerCase();
            return "https".equals(uri.getScheme())
                && (h.equals("github.com") || h.endsWith(".githubusercontent.com"));
        } catch (Exception e) {
            return false;
        }
    }

    private void kirimKeWeb(final String js) {
        runOnUiThread(new Runnable() {
            @Override public void run() {
                if (getBridge() == null || getBridge().getWebView() == null) return;
                getBridge().getWebView().evaluateJavascript(js, null);
            }
        });
    }

    @SuppressWarnings("deprecation")
    private long versiKode() {
        try {
            PackageInfo pi = getPackageManager().getPackageInfo(getPackageName(), 0);
            return Build.VERSION.SDK_INT >= 28 ? pi.getLongVersionCode() : pi.versionCode;
        } catch (Exception e) {
            return 0L;
        }
    }

    private boolean bolehPasang() {
        return Build.VERSION.SDK_INT < 26 || getPackageManager().canRequestPackageInstalls();
    }

    // Hapus APK sisa pembaruan yang sudah terpasang / kedaluwarsa.
    private void bersihkanSisaUpdate() {
        new Thread(new Runnable() {
            @Override public void run() {
                try {
                    File[] fs = new File(getCacheDir(), "update").listFiles();
                    if (fs == null) return;
                    long cur = versiKode();
                    for (File f : fs) {
                        Matcher m = NAMA_APK.matcher(f.getName());
                        if (!m.matches() || Long.parseLong(m.group(1)) <= cur) f.delete();
                    }
                } catch (Exception ignored) {}
            }
        }, "skd-cleanup").start();
    }

    private class Updater {
        // {"code":<versionCode>,"name":"<versionName>"}
        @JavascriptInterface
        public String info() {
            try {
                PackageInfo pi = getPackageManager().getPackageInfo(getPackageName(), 0);
                JSONObject o = new JSONObject();
                o.put("code", versiKode());
                o.put("name", pi.versionName == null ? "?" : pi.versionName);
                return o.toString();
            } catch (Exception e) {
                return "{\"code\":0,\"name\":\"?\"}";
            }
        }

        @JavascriptInterface
        public boolean canInstall() { return bolehPasang(); }

        @JavascriptInterface
        public void openInstallSettings() {
            runOnUiThread(new Runnable() {
                @Override public void run() {
                    try {
                        Intent i = new Intent(Settings.ACTION_MANAGE_UNKNOWN_APP_SOURCES,
                            Uri.parse("package:" + getPackageName()));
                        startActivity(i);
                    } catch (Exception ignored) {}
                }
            });
        }

        @JavascriptInterface
        public void cancel() { batalUnduh.set(true); }

        // Mengembalikan "START", "BUSY" atau "ERR:<alasan>". Progres dan hasil dikirim ke halaman lewat
        // window.__skdUpdProgress(terunduh, total) dan window.__skdUpdDone(status);
        // status: OK | NEED_PERMISSION | SIGNER_MISMATCH | CANCELED | ERR:<alasan>
        @JavascriptInterface
        public String downloadAndInstall(final String url, final long build, final long size, final String sha256) {
            if (url == null || !urlDiizinkan(url)) return "ERR:url-tidak-diizinkan";
            if (updating) return "BUSY";
            updating = true;
            batalUnduh.set(false);
            new Thread(new Runnable() {
                @Override public void run() {
                    String hasil = "OK";
                    try {
                        File apk = unduhApk(url, build, size, sha256);
                        if (apk == null) hasil = "CANCELED";
                        else if (Boolean.FALSE.equals(samaPenandatangan(apk))) { apk.delete(); hasil = "SIGNER_MISMATCH"; }
                        else if (!bolehPasang()) hasil = "NEED_PERMISSION";
                        else bukaInstaller(apk);
                    } catch (Exception e) {
                        hasil = "ERR:" + (e.getMessage() == null ? e.getClass().getSimpleName() : e.getMessage());
                    } finally {
                        updating = false;
                    }
                    kirimKeWeb("window.__skdUpdDone && window.__skdUpdDone(" + JSONObject.quote(hasil) + ")");
                }
            }, "skd-updater").start();
            return "START";
        }
    }

    private static String sha256Berkas(File f) throws Exception {
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        InputStream in = new java.io.FileInputStream(f);
        try {
            byte[] buf = new byte[64 * 1024];
            int n;
            while ((n = in.read(buf)) > 0) md.update(buf, 0, n);
        } finally {
            in.close();
        }
        StringBuilder sb = new StringBuilder();
        for (byte b : md.digest()) sb.append(String.format("%02x", b));
        return sb.toString();
    }

    private static boolean utuh(File f, long size, String sha) {
        try {
            if (!f.isFile() || f.length() < 1024 * 1024) return false;
            if (size > 0 && f.length() != size) return false;
            if (sha != null && !sha.isEmpty() && !sha256Berkas(f).equalsIgnoreCase(sha)) return false;
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    // Mengembalikan null bila dibatalkan. Berkas yang sudah diunduh dan utuh dipakai ulang.
    private File unduhApk(String url, long build, long size, String sha) throws Exception {
        File dir = new File(getCacheDir(), "update");
        if (!dir.exists() && !dir.mkdirs()) throw new java.io.IOException("Gagal membuat folder");
        File out = new File(dir, "SKD-CPNS-" + build + ".apk");
        if (utuh(out, size, sha)) return out;
        out.delete();
        File[] lama = dir.listFiles();
        if (lama != null) for (File f : lama) f.delete();   // sisa unduhan versi lain
        File part = new File(dir, out.getName() + ".part");
        HttpURLConnection c = null;
        try {
            // GitHub mengalihkan unduhan ke objects.githubusercontent.com; ikuti manual agar host tiap hop tetap divalidasi.
            String cur = url;
            int code = 0;
            for (int hop = 0; hop < 6; hop++) {
                if (!urlDiizinkan(cur)) throw new java.io.IOException("Pengalihan ke alamat tidak diizinkan");
                c = (HttpURLConnection) new URL(cur).openConnection();
                c.setInstanceFollowRedirects(false);
                c.setConnectTimeout(15000);
                c.setReadTimeout(30000);
                code = c.getResponseCode();
                if (code >= 300 && code < 400) {
                    String loc = c.getHeaderField("Location");
                    c.disconnect();
                    c = null;
                    if (loc == null) throw new java.io.IOException("Pengalihan kosong");
                    cur = new URL(new URL(cur), loc).toString();
                    continue;
                }
                break;
            }
            if (c == null) throw new java.io.IOException("Terlalu banyak pengalihan");
            if (code != 200) throw new java.io.IOException("Server menjawab " + code);
            long total = size > 0 ? size : c.getContentLengthLong();
            InputStream in = c.getInputStream();
            FileOutputStream fo = new FileOutputStream(part);
            try {
                byte[] buf = new byte[64 * 1024];
                long done = 0, last = 0;
                int n;
                while ((n = in.read(buf)) > 0) {
                    if (batalUnduh.get()) { fo.close(); part.delete(); return null; }
                    fo.write(buf, 0, n);
                    done += n;
                    long now = System.currentTimeMillis();
                    if (now - last > 250) {
                        last = now;
                        kirimKeWeb("window.__skdUpdProgress && window.__skdUpdProgress(" + done + "," + total + ")");
                    }
                }
                fo.flush();
                kirimKeWeb("window.__skdUpdProgress && window.__skdUpdProgress(" + done + "," + total + ")");
            } finally {
                try { fo.close(); } catch (Exception ignored) {}
                in.close();
            }
        } catch (Exception e) {
            part.delete();
            throw e;
        } finally {
            if (c != null) c.disconnect();
        }
        if (!part.renameTo(out)) { part.delete(); throw new java.io.IOException("Gagal menyimpan berkas"); }
        if (!utuh(out, size, sha)) { out.delete(); throw new java.io.IOException("Berkas unduhan rusak (ukuran atau checksum tidak cocok)"); }
        return out;
    }

    private static Set<String> hashSertifikat(Signature[] sigs) throws Exception {
        Set<String> r = new HashSet<String>();
        if (sigs == null) return r;
        for (Signature s : sigs) {
            byte[] d = MessageDigest.getInstance("SHA-256").digest(s.toByteArray());
            StringBuilder sb = new StringBuilder();
            for (byte b : d) sb.append(String.format("%02x", b));
            r.add(sb.toString());
        }
        return r;
    }

    // true = tanda tangan sama dengan aplikasi terpasang, false = beda, null = tidak bisa dipastikan.
    @SuppressWarnings("deprecation")
    private Boolean samaPenandatangan(File apk) {
        try {
            PackageManager pm = getPackageManager();
            Set<String> mine, theirs;
            if (Build.VERSION.SDK_INT >= 28) {
                int f = PackageManager.GET_SIGNING_CERTIFICATES;
                PackageInfo a = pm.getPackageInfo(getPackageName(), f);
                PackageInfo b = pm.getPackageArchiveInfo(apk.getPath(), f);
                if (a == null || b == null || a.signingInfo == null || b.signingInfo == null) return null;
                mine = hashSertifikat(a.signingInfo.getApkContentsSigners());
                theirs = hashSertifikat(b.signingInfo.getApkContentsSigners());
            } else {
                int f = PackageManager.GET_SIGNATURES;
                PackageInfo a = pm.getPackageInfo(getPackageName(), f);
                PackageInfo b = pm.getPackageArchiveInfo(apk.getPath(), f);
                if (a == null || b == null) return null;
                mine = hashSertifikat(a.signatures);
                theirs = hashSertifikat(b.signatures);
            }
            if (mine.isEmpty() || theirs.isEmpty()) return null;
            return mine.equals(theirs);
        } catch (Exception e) {
            return null;
        }
    }

    private void bukaInstaller(File apk) {
        Uri uri = FileProvider.getUriForFile(this, getPackageName() + ".fileprovider", apk);
        Intent i = new Intent(Intent.ACTION_VIEW);
        i.setDataAndType(uri, "application/vnd.android.package-archive");
        i.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION | Intent.FLAG_ACTIVITY_NEW_TASK);
        startActivity(i);
    }

    @Override
    public void onResume() {
        super.onResume();
        applyWebViewTweaks();
    }

    // Matikan scrollbar native (garis di sisi kanan yang menimpa bottom nav)
    // dan efek overscroll/"melar" di ujung atas-bawah halaman.
    private void applyWebViewTweaks() {
        if (getBridge() == null) return;
        WebView wv = getBridge().getWebView();
        if (wv == null) return;
        wv.setOverScrollMode(View.OVER_SCROLL_NEVER);
        wv.setVerticalScrollBarEnabled(false);
        wv.setHorizontalScrollBarEnabled(false);
        wv.setScrollBarStyle(View.SCROLLBARS_INSIDE_OVERLAY);
    }
}
