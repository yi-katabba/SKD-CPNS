package com.katabba.skdcpns;

import android.content.ContentResolver;
import android.content.ContentValues;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.provider.MediaStore;
import android.view.View;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;

import com.getcapacitor.BridgeActivity;

import java.io.OutputStream;
import java.nio.charset.StandardCharsets;

public class MainActivity extends BridgeActivity {
    private boolean fileBridgeAdded = false;

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
