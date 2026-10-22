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
