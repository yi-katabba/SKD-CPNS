package com.katabba.skdcpns;

import android.content.ContentResolver;
import android.content.ContentValues;
import android.content.Intent;
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
import java.nio.charset.StandardCharsets;

public class MainActivity extends BridgeActivity {
    private boolean fileBridgeAdded = false;
    private volatile boolean updating = false;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        addFileBridge();
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


    // ===== Pembaruan otomatis: unduh APK dari GitHub Releases lalu buka installer Android =====
    // Android tidak mengizinkan instal senyap di luar Play Store, jadi pengguna tetap menekan
    // "Pasang" sekali. Android sendiri menolak APK yang tanda tangannya beda dengan yang terpasang,
    // jadi APK palsu tidak bisa menimpa aplikasi ini.
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

    private class Updater {
        // Mengembalikan "START", "BUSY", "NEED_PERMISSION" atau "ERR:<alasan>".
        // Progres/hasil dikirim ke halaman lewat window.__skdUpdProgress(persen) dan window.__skdUpdDone(status).
        @JavascriptInterface
        public String downloadAndInstall(final String url) {
            if (url == null || !urlDiizinkan(url)) return "ERR:url-tidak-diizinkan";
            if (updating) return "BUSY";
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O
                    && !getPackageManager().canRequestPackageInstalls()) {
                try {
                    Intent i = new Intent(Settings.ACTION_MANAGE_UNKNOWN_APP_SOURCES,
                        Uri.parse("package:" + getPackageName()));
                    i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                    startActivity(i);
                } catch (Exception ignored) {}
                return "NEED_PERMISSION";
            }
            updating = true;
            new Thread(new Runnable() {
                @Override public void run() {
                    String hasil = "OK";
                    try {
                        File apk = unduhApk(url);
                        bukaInstaller(apk);
                    } catch (Exception e) {
                        hasil = "ERR:" + e.getClass().getSimpleName();
                    } finally {
                        updating = false;
                    }
                    kirimKeWeb("window.__skdUpdDone && window.__skdUpdDone('" + hasil + "')");
                }
            }, "skd-updater").start();
            return "START";
        }
    }

    private File unduhApk(String url) throws Exception {
        File dir = new File(getCacheDir(), "update");
        if (!dir.exists() && !dir.mkdirs()) throw new java.io.IOException("mkdir");
        File out = new File(dir, "SKD-CPNS.apk");
        if (out.exists()) out.delete();
        HttpURLConnection c = null;
        try {
            // GitHub mengalihkan unduhan ke objects.githubusercontent.com; ikuti manual agar host tiap hop tetap divalidasi.
            String cur = url;
            for (int hop = 0; hop < 5; hop++) {
                if (!urlDiizinkan(cur)) throw new java.io.IOException("redirect-tidak-diizinkan");
                c = (HttpURLConnection) new URL(cur).openConnection();
                c.setInstanceFollowRedirects(false);
                c.setConnectTimeout(15000);
                c.setReadTimeout(30000);
                int code = c.getResponseCode();
                if (code >= 300 && code < 400) {
                    String loc = c.getHeaderField("Location");
                    c.disconnect();
                    if (loc == null) throw new java.io.IOException("redirect-kosong");
                    cur = new URL(new URL(cur), loc).toString();
                    continue;
                }
                if (code != 200) throw new java.io.IOException("http-" + code);
                break;
            }
            if (c == null || c.getResponseCode() != 200) throw new java.io.IOException("terlalu-banyak-redirect");
            long total = c.getContentLengthLong();
            InputStream in = c.getInputStream();
            FileOutputStream fo = new FileOutputStream(out);
            try {
                byte[] buf = new byte[32 * 1024];
                long done = 0;
                int last = -1, n;
                while ((n = in.read(buf)) > 0) {
                    fo.write(buf, 0, n);
                    done += n;
                    if (total > 0) {
                        int pct = (int) (done * 100 / total);
                        if (pct != last) {
                            last = pct;
                            kirimKeWeb("window.__skdUpdProgress && window.__skdUpdProgress(" + pct + ")");
                        }
                    }
                }
                fo.flush();
            } finally {
                fo.close();
                in.close();
            }
            if (total > 0 && out.length() != total) throw new java.io.IOException("ukuran-tidak-cocok");
            if (out.length() < 1024 * 1024) throw new java.io.IOException("file-terlalu-kecil");
        } finally {
            if (c != null) c.disconnect();
        }
        return out;
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
