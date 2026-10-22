/* ============================================================
   DAFTAR PENGGUNA — Latihan SKD CPNS
   ------------------------------------------------------------
   Ini daftar akun DEFAULT yang boleh login pertama kali.
   Kalau username yang diketik TIDAK ADA di sini DAN TIDAK ADA
   juga di Google Sheet (akun yang sudah pernah ganti username/
   password), maka login akan DITOLAK.

   ATURAN PENTING:
   - "id" harus UNIK dan JANGAN PERNAH diubah/dihapus/dipakai
     ulang, walaupun username & password pemiliknya sudah diganti
     nanti. "id" inilah yang dipakai sistem untuk tetap mengenali
     akun yang sama meskipun username/password sudah berubah.
   - "username" & "password" di bawah ini adalah kredensial AWAL.
     Begitu user mengganti username/password lewat menu "Ganti
     Akun" di aplikasi, kredensial BARU disimpan di Google Sheet
     dan akan dipakai untuk login berikutnya (bukan yang di file
     ini lagi) — tapi baris di file ini tidak perlu dihapus.
   - Tambah/hapus akun cukup edit array di bawah, lalu upload
     ulang file ini bersama index.html.

   CATATAN KEAMANAN:
   Karena file ini berjalan di browser (client-side), siapapun
   yang bisa membuka source code halaman bisa melihat isi daftar
   ini. Cocok untuk aplikasi latihan internal, TAPI JANGAN dipakai
   untuk data sensitif atau password yang dipakai ulang di sistem
   lain.
============================================================ */

const daftarPengguna = [
  { id: 'p01', username: 'admin01', password: '12345' },
  { id: 'p02', username: 'admin02', password: '12345' },
  { id: 'p03', username: 'peserta01', password: '12345' },
  { id: 'p04', username: 'peserta02', password: '12345' },
  { id: 'p05', username: 'peserta03', password: '12345' },
  // Tambahkan akun baru di bawah ini, contoh:
  // { id: 'p04', username: 'budisantoso', password: 'ganti123' },
];
