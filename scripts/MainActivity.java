package com.katabba.skdcpns;

import android.os.Bundle;
import android.view.View;
import android.webkit.WebView;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onStart() {
        super.onStart();
        applyWebViewTweaks();
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
