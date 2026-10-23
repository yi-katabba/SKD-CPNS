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
Buka **Tentang Aplikasi > Pembaruan** (gaya yang sama dengan Alethra):
- Menampilkan versi terpasang, tombol **Periksa pembaruan**, dan sakelar **Periksa pembaruan otomatis** (maksimal sekali sehari, hanya satu permintaan ke api.github.com).
- Kalau ada versi baru: ukuran, tanggal, catatan rilis, tombol **Unduh & pasang** dan **Lewati versi ini**. Unduhan menampilkan progres dan bisa **dibatalkan**.
- Pemeriksaan otomatis yang menemukan versi baru juga memunculkan banner di **atas** layar (tombol Perbarui / Batal / tutup).
- Keamanan: hanya `https` dari github.com / githubusercontent.com; ukuran dan SHA-256 (dari GitHub) dicek; tanda tangan APK harus sama dengan aplikasi terpasang sebelum installer dibuka. Berkas yang sudah utuh dipakai ulang (tidak diunduh ulang setelah memberi izin).
- Pertama kali Android meminta izin "Pasang aplikasi tidak dikenal" untuk aplikasi ini. Instal sepenuhnya senyap tidak diizinkan Android di luar Play Store, jadi satu ketukan "Pasang" tetap perlu.
- Sisa APK di cache dihapus otomatis saat aplikasi dibuka setelah update.
- Catatan rilis diambil dari pesan commit yang memicu build, jadi tulis pesan commit yang jelas.
- Versi APK sebelum fitur ini tidak punya menu ini; pasang build ini sekali secara manual, update berikutnya lewat menu Pembaruan.
- Code signing Windows/SmartScreen tidak berlaku untuk APK.
