# Build APK Android (GitHub Actions)

## Setup sekali saja: kunci signing
Supaya APK baru bisa menimpa (update) aplikasi yang sudah terinstal tanpa uninstall dan tanpa kehilangan progres,
semua build harus ditandatangani dengan **kunci yang sama**. Tambahkan 4 secret di
GitHub repo > Settings > Secrets and variables > Actions:

| Secret | Isi |
|---|---|
| ANDROID_KEYSTORE_BASE64 | isi file keystore (base64) |
| ANDROID_KEYSTORE_PASSWORD | password keystore |
| ANDROID_KEY_ALIAS | alias kunci |
| ANDROID_KEY_PASSWORD | password kunci |

Jangan pernah commit file .jks ke repo, dan simpan backup-nya. Kalau hilang, pengguna harus uninstall untuk update.

## Rilis versi baru
Push ke `main`. Setiap build otomatis menaikkan `versionCode` (nomor run) dan membuat Release `build-N` berisi `SKD-CPNS.apk`.
Aplikasi yang terpasang akan menampilkan banner "Update tersedia" saat ada internet (repo harus public agar bisa dicek).

## Pembaruan di dalam aplikasi
Tombol **Perbarui** pada banner mengunduh APK dari GitHub Releases (dengan persentase progres) lalu membuka installer Android; pengguna cukup menekan "Pasang".
- Pertama kali, Android meminta izin "Pasang aplikasi dari sumber ini" untuk aplikasi ini. Setelah diizinkan, kembali ke aplikasi dan tekan Perbarui lagi.
- Android tidak mengizinkan instal sepenuhnya senyap di luar Play Store, jadi satu ketukan "Pasang" tetap diperlukan.
- Hanya URL `https` dari github.com / githubusercontent.com yang diterima. APK dengan tanda tangan berbeda otomatis ditolak Android, jadi keystore harus tetap sama.
- Versi APK lama (sebelum fitur ini) tetap memakai tautan unduh; setelah memasang build ini sekali secara manual, update berikutnya otomatis.
- Code signing Windows/SmartScreen tidak berlaku untuk APK (itu hanya untuk aplikasi desktop Windows).
