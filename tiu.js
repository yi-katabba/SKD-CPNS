// Materi TIU — bersumber dari Materi_TIU.docx (11 tema/kategori).
// Gambar soal/pembahasan ada di folder images/materi-tiu/.
// Tiap objek di "kategori" = 1 tab di halaman Materi. Untuk mengubah isi, edit HTML di dalam `konten`.
var materiTIU = {
  judul: "TIU — Tes Intelegensi Umum",
  konten: "",
  kategori: [
    {
      id: "tema1",
      nama: "Pecahan dan Desimal",
      konten: `
<h3>1. OPERASI BILANGAN</h3>
<h4>a. Operasi Penjumlahan</h4>
<p>Penjumlahan bilangan bulat memiliki sifat-sifat berikut:</p>
<ul>
<li><p><strong>Komutatif:</strong> a + b = b + a</p></li>
</ul>
<blockquote>
<p>Contoh: 3 + 2 = 2 + 3. Hasilnya sama-sama 5.</p>
</blockquote>
<ul>
<li><p><strong>Asosiatif:</strong> (a + b) + c = a + (b + c)</p></li>
</ul>
<blockquote>
<p>Contoh: (5 + 3) + 2 = 5 + (3 + 2). Hasilnya sama-sama 10.</p>
</blockquote>
<h4>b. Operasi Pengurangan</h4>
<p>Pengurangan bilangan bulat sering melibatkan bilangan positif dan negatif.</p>
<p>Contoh: 3 − 5 = −2</p>
<h4>c. Operasi Perkalian</h4>
<p>Perkalian bilangan bulat memiliki sifat-sifat berikut:</p>
<ul>
<li><p><strong>Komutatif:</strong> a × b = b × a</p></li>
</ul>
<blockquote>
<p>Contoh: 3 × 2 = 2 × 3. Hasilnya sama-sama 6.</p>
</blockquote>
<ul>
<li><p><strong>Distributif:</strong> a × (b + c) = (a × b) + (a × c)</p></li>
</ul>
<blockquote>
<p>Contoh: 5 × (3 + 2) = (5 × 3) + (5 × 2). Hasilnya sama-sama 25.</p>
</blockquote>
<h4>d. Operasi Pembagian</h4>
<p>Pembagian bilangan bulat menghasilkan bilangan bulat lain atau bilangan desimal.</p>
<p>Contoh: 20 ÷ 4 = 5 dan 10 ÷ 4 = 2,5</p>
<h3>2. OPERASI BILANGAN PECAHAN</h3>
<p>Bilangan pecahan adalah bilangan yang dinyatakan dalam bentuk a/b, dimana:</p>
<ul>
<li><p>a disebut pembilang</p></li>
<li><p>b disebut penyebut (b ≠ 0)</p></li>
</ul>
<h4>a. Penjumlahan dan Pengurangan Pecahan</h4>
<p>Untuk melakukan operasi penjumlahan dan pengurangan pecahan bisa dengan langkah-langkah berikut:</p>
<blockquote>
<p><strong>1) Samakan Penyebut</strong> – Jika menemukan penyebut yang tidak sama, cari KPK dari penyebutnya.</p>
<p><strong>2) Lakukan Operasi pada Pembilang</strong> – Setelah penyebut disamakan, operasikan pembilang.</p>
<p><strong>3) Sederhanakan Pecahan</strong> – Jika hasilnya dapat disederhanakan, bagi pembilang dan penyebut dengan FPB.</p>
</blockquote>
<ul>
<li><p><strong>Pecahan biasa dengan pecahan biasa (penyebut sama)</strong></p></li>
</ul>
<blockquote>
<p>2/5 + 1/5 = (2 + 1)/5 = 3/5</p>
</blockquote>
<ul>
<li><p><strong>Pecahan biasa dengan pecahan biasa (penyebut beda)</strong></p></li>
</ul>
<blockquote>
<p>2/3 + 3/5 = …</p>
<p><em>Cara 1:</em> Samakan penyebutnya dengan mencari KPK dari 3 dan 5</p>
<p>2/3 + 3/5 = (2×5)/15 + (3×3)/15 = 10/15 + 9/15 = 19/15</p>
<p><em>Cara 2:</em> Khusus untuk penjumlahan dua pecahan, bisa dengan kali silang</p>
<p>2/3 + 3/5 = ((2×5) + (3×3)) / (3×5) = (10 + 9)/15 = 19/15</p>
</blockquote>
<ul>
<li><p><strong>Pecahan biasa dengan bilangan bulat</strong></p></li>
</ul>
<blockquote>
<p>a. 2/3 + 6 = …</p>
<p><em>Cara 1:</em> Samakan penyebutnya</p>
<p>2/3 + 6/1 = 2/3 + (6·3)/3 = 2/3 + 18/3 = 20/3</p>
<p><em>Cara 2:</em> Kalikan bilangan bulat (6) dengan penyebut 3.</p>
<p>2/3 + 6 = (2 + 6·3)/3 = (2 + 18)/3 = 20/3</p>
<p>b. 8/3 + 2 = …</p>
<p><em>Cara 2:</em> Kalikan bilangan bulat (2) dengan penyebut 3.</p>
<p>8/3 + 2 = (8 + 2·3)/3 = (8 + 6)/3 = 14/3</p>
<p>c. 11/3 − 2 = (11 − 2·3)/3 = (11 − 6)/3 = 5/3</p>
<p>d. 4 − 2/5 = (4·5 − 2)/5 = (20 − 2)/5 = 18/5</p>
</blockquote>
<ul>
<li><p><strong>Pecahan biasa dengan pecahan campuran</strong></p></li>
</ul>
<blockquote>
<p>a. 8/3 + 2 1/3 = …</p>
<p>Ubah pecahan campuran menjadi pecahan biasa:</p>
<p>8/3 + 2 1/3 = 8/3 + ((3×2) + 1)/3 = 8/3 + 7/3 = 15/3 = 5</p>
<p>b. 2 2/3 − 1/2 = …</p>
<p>2 2/3 − 1/2 = ((3×2) + 2)/3 − 1/2 = 8/3 − 1/2 = (2×8)/6 − (3×1)/6 = 16/6 − 3/6 = 13/6</p>
</blockquote>
<h4>b. Perkalian Pecahan</h4>
<p>Untuk melakukan operasi perkalian pecahan bisa dengan langkah-langkah berikut:</p>
<blockquote>
<p><strong>1) Kalikan Pembilang dan Penyebut</strong> – Operasikan langsung pembilang dengan pembilang dan penyebut dengan penyebut.</p>
<p><strong>2) Sederhanakan Hasil</strong> – Jika memungkinkan, sederhanakan hasil akhir.</p>
</blockquote>
<p>Contoh: 2/3 × 4/5</p>
<p class="mt-pembahasan"><strong>Pembahasan:</strong> Kalikan pembilang dan penyebut.</p>
<p>(2 × 4)/(3 × 5) = 8/15</p>
<h4>c. Pembagian Pecahan</h4>
<p>Untuk melakukan operasi pembagian pecahan bisa dengan langkah-langkah berikut:</p>
<blockquote>
<p><strong>1) Ubah Pembagian menjadi Perkalian dengan Invers</strong> – Invers atau kebalikan pecahan adalah menukar pembilang dan penyebut.</p>
<p><strong>2) Kalikan seperti Operasi Perkalian Pecahan.</strong></p>
</blockquote>
<p>Contoh: 3/4 ÷ 5/6</p>
<p class="mt-pembahasan"><strong>Pembahasan:</strong> Ubah pembagian menjadi perkalian dengan invers:</p>
<p>3/4 ÷ 5/6 = 3/4 × 6/5 = 18/20</p>
<h4>d. Tips Pengerjaan Operasi Pecahan</h4>
<blockquote>
<p><strong>1) Pahami KPK dan FPB</strong> – KPK sangat penting untuk menyamakan penyebut, sedangkan FPB untuk menyederhanakan hasil.</p>
<p><strong>2) Sederhanakan Pecahan di Awal</strong> – Jika memungkinkan, sederhanakan pembilang dan penyebut sebelum melakukan operasi untuk menghindari angka besar.</p>
<p><strong>3) Periksa Hasil Akhir</strong> – Pastikan pecahan dalam bentuk paling sederhana.</p>
</blockquote>
<h3>3. TIPS PENTING PECAHAN</h3>
<p>Pastikan penyebut sudah sama:</p>
<blockquote>
<p>a. 2/3 + 4/3 = (2 + 4)/3 = 6/3</p>
</blockquote>
<p>Jika angka sudah sederhana bisa langsung dikalikan:</p>
<blockquote>
<p>b. 2/3 × 4/3 = (2×4)/(3×3) = 8/9</p>
</blockquote>
<p>Jika pembagian pecahan maka pembagi dibalik dan tanda operasi berubah jadi kali:</p>
<blockquote>
<p>c. 2/3 ÷ 4/3 = 2/3 × 3/4 = (2×3)/(3×4) = 6/12</p>
</blockquote>
<h4>Urutan Pengerjaan Operasi Hitung Campuran</h4>
<blockquote>
<p>1. Tanda kurung</p>
<p>2. Pangkat</p>
<p>3. Perkalian dan pembagian</p>
<p>4. Penjumlahan dan pengurangan</p>
</blockquote>
<p>Catatan: Untuk perkalian dan pembagian dikerjakan dari paling kiri/depan.</p>
<h3>4. DASAR PERSENTASE</h3>
<blockquote>
<p>a. % = 1/100</p>
<p>b. 20% = 20 × 1/100 = 20/100</p>
<p>c. 20% dari 35 = 20/100 × 35 = 1/5 × 35 = 7</p>
<p>d. 25% dari 4/5 = 25/100 × 4/5 = 1/4 × 4/5 = 1/5</p>
</blockquote>
<h3>5. PERKALIAN DESIMAL</h3>
<p><strong>Tips perkalian desimal.</strong> Untuk menentukan letak koma perkalian desimal: jumlahkan banyak angka di belakang koma bilangan pertama dengan bilangan kedua.</p>
<blockquote>
<p>a. 0,05 × 0,03 = …</p>
<p>Tinggal kalikan 5 × 3 = 15. Letak koma: 0,05 = 2 angka dan 0,03 = 2 angka. Jadi letak koma 2 + 2 = 4 angka di belakang koma sehingga menjadi <strong>0,0015</strong>.</p>
<p>b. 0,24 × 0,2 = …</p>
<p>Tinggal kalikan 24 × 2 = 48. Letak koma: 0,24 = 2 angka dan 0,2 = 1 angka. Jadi letak koma 2 + 1 = 3 angka di belakang koma sehingga menjadi <strong>0,048</strong>.</p>
<p>c. 28 × 0,2 = …</p>
<p>Tinggal kalikan 28 × 2 = 56. Letak koma: 28 = 0 angka dan 0,2 = 1 angka. Jadi letak koma 0 + 1 = 1 angka di belakang koma sehingga menjadi <strong>5,6</strong>.</p>
<p>d. 250 × 0,02 = …</p>
<p>Tinggal kalikan 250 × 2 = 500. Letak koma: 250 = 0 angka dan 0,02 = 2 angka. Jadi letak koma 0 + 2 = 2 angka di belakang koma sehingga menjadi <strong>5,00 atau 5</strong>.</p>
</blockquote>
<h3>6. PEMBAGIAN DESIMAL</h3>
<p><strong>Tips pembagian desimal.</strong> Untuk menentukan letak koma pembagian desimal: kurangkan banyak angka di belakang koma bilangan pertama dengan bilangan kedua.</p>
<blockquote>
<p>a) 0,24 : 0,2 = …</p>
<p>Tinggal bagi 24 dengan 2 = 12. Letak koma: 0,24 = 2 angka dan 0,2 = 1 angka. Jadi letak koma 2 − 1 = 1 angka di belakang koma sehingga menjadi <strong>1,2</strong>.</p>
<p>b) 0,12 : 0,6 = …</p>
<p>Tinggal bagi 12 dengan 6 = 2. Letak koma: 0,12 = 2 angka dan 0,6 = 1 angka. Jadi letak koma 2 − 1 = 1 angka di belakang koma sehingga menjadi <strong>0,2</strong>.</p>
<p>c) 0,64 : 8 = …</p>
<p>Tinggal bagi 64 dengan 8 = 8. Letak koma: 0,64 = 2 angka dan 8 = 0 angka. Jadi letak koma 2 − 0 = 2 angka di belakang koma sehingga menjadi <strong>0,08</strong>.</p>
<p>d) 18 : 0,9 = …</p>
<p>Tinggal bagi 18 dengan 9 = 2. Letak koma: 18 = 0 angka dan 0,9 = 1 angka. Jadi letak koma 0 − 1 = −1, didapat −1 maka hasil pembagian dikali 10. Sehingga hasilnya menjadi <strong>20</strong>.</p>
<p>Jika didapat −3 maka hasil pembagian dikali 1.000.</p>
<p>Jika didapat −4 maka hasil pembagian dikali 10.000.</p>
<p>Dan seterusnya.</p>
</blockquote>
`
    },
    {
      id: "tema2",
      nama: "Hubungan X dan Y",
      konten: `
<h3>1. MACAM-MACAM BILANGAN</h3>
<h4>a. Bilangan Asli</h4>
<p>Bilangan asli adalah himpunan bilangan bulat positif yang dimulai dari angka 1 sampai tak terhingga.</p>
<p>Contoh: 1, 2, 3, 4, …</p>
<h4>b. Bilangan Cacah</h4>
<p>Bilangan cacah adalah himpunan bilangan positif yang dimulai dari angka 0 sampai tak terhingga.</p>
<p>Contoh: 0, 1, 2, 3, 4, …</p>
<h4>c. Bilangan Bulat</h4>
<p>Bilangan bulat adalah himpunan bilangan yang bukan bilangan desimal maupun pecahan. Bilangan bulat terdiri dari bilangan bulat negatif, bilangan nol dan bilangan bulat positif.</p>
<p>Contoh: …, −2, −1, 0, 1, 2, 3, …</p>
<h4>d. Bilangan Genap</h4>
<p>Bilangan genap adalah bilangan asli yang habis dibagi 2.</p>
<p>Contoh: 0, 2, 4, 6, 8, …</p>
<h4>e. Bilangan Ganjil</h4>
<p>Bilangan ganjil adalah bilangan asli yang tidak habis dibagi 2.</p>
<p>Contoh: 1, 3, 5, 7, …</p>
<h3>2. HUBUNGAN RUAS</h3>
<h4>a. A × B = B × A (Sifat Komutatif Perkalian)</h4>
<p>Ketika bilangan dikalikan kemudian ditukar posisinya akan tetap menghasilkan hasil yang sama.</p>
<p>Contoh: 4 × 2 = 2 × 4</p>
<h4>b. Mencoret Bilangan dalam 1 Ruas</h4>
<p>Digunakan untuk menyederhanakan suatu bilangan. Jika satu ruas maka boleh mencoret atas dengan bawah.</p>
<p>Contoh:</p>
<blockquote>
<p>8/10 = 12/x</p>
<p>8/10 disederhanakan (sama-sama dibagi 2) menjadi 4/5, sehingga 4/5 = 12/x</p>
<p>x = (12 × 5)/4</p>
<p>x = 15</p>
</blockquote>
<h4>c. Mencoret Bilangan Beda Ruas</h4>
<p>Digunakan untuk menyederhanakan suatu bilangan. Jika beda ruas maka boleh coret atas dengan atas dan bawah dengan bawah.</p>
<p>Contoh:</p>
<blockquote>
<p>8/10 = 12/x</p>
<p>8 dan 12 (sama-sama dibagi 4) menjadi 2/10 = 3/x</p>
<p>x = (3 × 10)/2</p>
<p>x = 15</p>
</blockquote>
<h3>3. Urutan Pengerjaan Operasi Hitung Campuran</h3>
<blockquote>
<p>1. Tanda kurung</p>
<p>2. Pangkat</p>
<p>3. Perkalian dan pembagian</p>
<p>4. Penjumlahan dan pengurangan</p>
</blockquote>
<p>Catatan: Untuk perkalian dan pembagian dikerjakan dari paling kiri/depan.</p>
<h4>Contoh soal</h4>
<p>Diketahui jarak kota X dan Y adalah 50 km. Jarak tersebut ditempuh mobil selama 1 jam.</p>
<div class="mt-table-wrap"><table>
<colgroup>
<col style="width: 63%" />
<col style="width: 36%" />
</colgroup>
<thead>
<tr>
<th><strong>M</strong></th>
<th><strong>N</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Kecepatan rata-rata mobil tersebut dalam km/jam</td>
<td>72 km/jam</td>
</tr>
</tbody>
</table></div>
<p>Manakah hubungan yang benar antara kuantitas M dan N berikut berdasarkan informasi yang diberikan….</p>
<blockquote>
<p>A. 2M &gt; 3N</p>
<p>B. 2M &lt; 3N</p>
<p>C. Hubungan M dan N tidak dapat ditentukan</p>
<p>D. M + 3N = 0</p>
<p>E. 3M − 3N = 0</p>
</blockquote>
<p class="mt-pembahasan"><strong>Pembahasan:</strong></p>
<p>Nilai M dan N akan dibandingkan, karena N sudah diketahui maka cari dahulu nilai M.</p>
<div class="mt-table-wrap"><table>
<colgroup>
<col style="width: 63%" />
<col style="width: 36%" />
</colgroup>
<thead>
<tr>
<th><strong>M</strong></th>
<th><strong>N</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Kecepatan rata-rata mobil tersebut dalam km/jam: v = s/t = 50 km / 1 jam = 50 km/jam</td>
<td>72 km/jam</td>
</tr>
</tbody>
</table></div>
<p>Maka hubungan M dan N adalah: <strong>2M &lt; 3N</strong></p>
<p class="mt-jawaban"><strong>Jawaban: B</strong></p>
`
    },
    {
      id: "tema3",
      nama: "Analogi Kata dan Kalimat",
      konten: `
<p>Analogi adalah salah satu materi yang selalu muncul di tes CPNS maupun kedinasan, namun ditahun 2022 khususnya SKD kedinasan 2022, materi ini tidak keluar lagi. Untuk SKD 2024 ternyata materi ini keluar lagi. Jika peserta tidak mendapatkan model soal analogi kata biasanya para peserta mendapatkan soal analogi kalimat.</p>
<p>Analogi adalah persamaan atau persesuaian antara dua benda atau hal yang berlainan. Dalam ilmu linguistik atau bahasa, analogi merupakan hasil pembentukan unsur bahasa karena pengaruh pola lain dalam bahasa.</p>
<h4>Trik mengerjakan soal analogi</h4>
<ul>
<li><p>Tentukan pola antar kata (depan ke belakang atau belakang ke depan) dalam satu ruas dan pola yang telah ditentukan berlaku juga untuk jawabannya.</p></li>
</ul>
<p><strong>A : B = C : D</strong></p>
<p>Ruas kiri = ruas kanan</p>
<ul>
<li><p>Hubungkan dua kata tersebut dengan sebuah kata hubung atau membentuk sebuah kalimat sehingga dapat berlaku juga untuk dua kata jawabannya. Kata hubung harus bersifat umum, tidak spesifik.</p></li>
<li><p>Mencari kesamaan kata di ruas kiri dengan ruas kanan.</p></li>
</ul>
<h3>1. Berpola dari depan ke belakang</h3>
<p>A : B = C : D (A dihubungkan dengan B, C dihubungkan dengan D)</p>
<p>Contoh:</p>
<p>KANDANG : SAPI = … : …</p>
<blockquote>
<p>A. Kantor : Pekerja</p>
<p>B. Rumah : Manusia</p>
<p>C. Kebun Binatang : Pawang</p>
<p>D. Angkasa : Roket</p>
<p>E. Motor : Bengkel</p>
</blockquote>
<p class="mt-pembahasan"><strong>Pembahasan:</strong></p>
<p>Kandang tempat tinggal bagi sapi, sebagaimana rumah tempat tinggal bagi manusia.</p>
<p class="mt-jawaban"><strong>Jawaban: B</strong></p>
<h3>2. Berpola dari belakang ke depan</h3>
<p>A : B = C : D (B dihubungkan dengan A, D dihubungkan dengan C)</p>
<p>Contoh:</p>
<p>PILOT : PESAWAT = … : …</p>
<blockquote>
<p>A. Sapi : Andong</p>
<p>B. Dosen : Mahasiswa</p>
<p>C. Masinis : Kereta Api</p>
<p>D. Bensin : Motor</p>
<p>E. Kereta Api : Masinis</p>
</blockquote>
<p class="mt-pembahasan"><strong>Pembahasan:</strong></p>
<p>Pesawat dikemudikan pilot, sebagaimana kereta api dikemudikan masinis.</p>
<p class="mt-jawaban"><strong>Jawaban: C</strong></p>
<h3>3. Berpola A ke C dan B ke D</h3>
<p>A : B = C : D (A dengan C, B dengan D)</p>
<p>Biasanya untuk pola ini merupakan jenis sinonim atau antonim.</p>
<p>Contoh:</p>
<p>KECIL : BASAH = BESAR : …</p>
<blockquote>
<p>A. Kering</p>
<p>B. Kemarau</p>
<p>C. Hujan</p>
<p>D. Panas</p>
<p>E. Banjir</p>
</blockquote>
<p class="mt-pembahasan"><strong>Pembahasan:</strong></p>
<p>Kecil lawan katanya adalah besar, sebagaimana basah lawan katanya kering.</p>
<p class="mt-jawaban"><strong>Jawaban: A</strong></p>
<h3>4. Analogi Kalimat</h3>
<p>Untuk materi analogi kalimat yang keluar di SKD CPNS 2023, cara untuk mengerjakan soal model ini adalah dengan menghubungkan atau mencari hubungan kedua objek pada kalimat di soal dengan hubungan kedua objek pada pilihan jawaban.</p>
<h4>Contoh soal:</h4>
<p><strong>1.</strong> Elang memiliki sayap dan paruh. Hubungan ini sama dengan …</p>
<blockquote>
<p>A. Gadis itu memiliki gelang dan kalung.</p>
<p>B. Kuda memiliki pelana dan ladam.</p>
<p>C. Kepiting memiliki cangkang dan capit.</p>
<p>D. Bunga mawar memiliki bunga dan mawar.</p>
<p>E. Becak memiliki pedal dan speaker.</p>
</blockquote>
<p class="mt-pembahasan"><strong>Pembahasan:</strong> Sayap dan paruh adalah bagian tubuh dari elang, sama seperti cangkang dan capit merupakan bagian tubuh dari kepiting.</p>
<p class="mt-jawaban"><strong>Jawaban: C</strong></p>
<p><strong>2.</strong> Tebu memiliki batang dan daun. Hubungan ini sama dengan …</p>
<blockquote>
<p>A. Sapi memiliki kaki dan ekor.</p>
<p>B. Anak itu memiliki topi dan sendal.</p>
<p>C. Komputer memiliki mouse dan software.</p>
<p>D. TV memiliki remote dan antena.</p>
<p>E. Kuda memiliki pelana dan sepatu.</p>
</blockquote>
<p class="mt-pembahasan"><strong>Pembahasan:</strong> Batang dan daun adalah bagian yang ada pada tebu, seperti halnya kaki dan ekor merupakan bagian yang ada pada sapi (bagian yang memang ada).</p>
<p class="mt-jawaban"><strong>Jawaban: A</strong></p>
<p><strong>3.</strong> Tenda dan api unggun berada di tempat perkemahan. Hubungan ini sama dengan …</p>
<blockquote>
<p>A. Bulan dan bintang berada di malam hari</p>
<p>B. Kata dan kalimat berada dalam paragraf</p>
<p>C. Buku dan kamus berada di dalam perpustakaan</p>
<p>D. Praktek dan teori berada di dalam proses kuliah</p>
<p>E. Monitor dan keyboard berada pada CPU</p>
</blockquote>
<p class="mt-pembahasan"><strong>Pembahasan:</strong> Tenda dan api unggun adalah bagian yang berada di tempat perkemahan, seperti halnya jawaban buku dan kamus berada di dalam perpustakaan.</p>
<p class="mt-jawaban"><strong>Jawaban: C</strong></p>
`
    },
    {
      id: "tema4",
      nama: "Pola Kalimat",
      konten: `
<p>Kalimat merupakan kumpulan kata yang mengandung arti yang disusun menggunakan pola tertentu. Pola dasar kalimat pada dasarnya terdiri dari sebuah subjek dan predikat (S-P). Jika tidak ada kedua unsur atau salah satu unsur tersebut, maka <em>tidak bisa</em> disebut kalimat. Pola kalimat memiliki unsur Subjek, Predikat, Objek, Pelengkap, dan Keterangan (S-P-O-Pel-K).</p>
<h3>UNSUR-UNSUR KALIMAT</h3>
<p><strong>1. Subjek (S)</strong></p>
<blockquote>
<p>Subjek adalah seseorang yang melakukan suatu kegiatan atau pekerjaan dalam sebuah kalimat. Selain orang, subjek juga bisa berupa makhluk hidup, benda mati, ataupun lokasi.</p>
</blockquote>
<p><strong>2. Predikat (P)</strong></p>
<blockquote>
<p>Predikat sebagai unsur kalimat merupakan kegiatan yang sedang dilakukan oleh unsur subjeknya. Unsur kalimat predikat biasanya terdiri dari kata kerja, sifat, atau kata benda.</p>
</blockquote>
<p><strong>3. Objek (O)</strong></p>
<blockquote>
<p>Objek adalah unsur kalimat yang punya interaksi dengan subjek melalui penghubung predikat dalam sebuah kalimat. Objek dalam kalimat bisa berupa makhluk hidup, benda mati, ataupun lokasi.</p>
</blockquote>
<p><strong>4. Pelengkap (Pel)</strong></p>
<blockquote>
<p>Pelengkap bertindak sebagai informasi tambahan dari sebuah kalimat. Contoh pelengkap disini bisa bermacam-macam seperti pelengkap predikat, hingga pelengkap objek.</p>
</blockquote>
<p><strong>5. Keterangan (K)</strong></p>
<blockquote>
<p>Keterangan dalam sebuah pola kalimat akan menjelaskan di mana, kapan, tujuan, cara, hingga sebab-akibat kegiatan terjadi.</p>
</blockquote>
<h3>POLA KALIMAT</h3>
<p><strong>1. Kalimat SP (Subjek dan Predikat)</strong></p>
<blockquote>
<p>Kalimat SP merupakan <strong>pola dasar</strong> kalimat dalam Bahasa Indonesia. Predikat kalimat ini dapat berupa kata sifat, kata kerja, dan kata benda.</p>
<p>Contoh penggunaan kalimat SP:</p>
</blockquote>
<div class="mt-table-wrap"><table>
<colgroup>
<col style="width: 60%" />
<col style="width: 39%" />
</colgroup>
<thead>
<tr>
<th><strong>Kalimat</strong></th>
<th><strong>Pola</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Wati – cerdas.</td>
<td>S-P (Kata Sifat)</td>
</tr>
<tr>
<td>Joko dan Eko – sedang belajar.</td>
<td>S-P (Kata Kerja)</td>
</tr>
<tr>
<td>Saudaranya – seorang artis.</td>
<td>S-P (Kata Benda)</td>
</tr>
</tbody>
</table></div>
<p><strong>2. Kalimat SPO (Subjek, Predikat, dan Objek)</strong></p>
<blockquote>
<p>Kalimat SPO memiliki unsur kalimat subjek, predikat, dan objek. Objek di sini bertindak sebagai sesuatu yang berhubungan dengan subjek melalui sebuah predikat.</p>
<p>Contoh penggunaan kalimat SPO:</p>
</blockquote>
<div class="mt-table-wrap"><table>
<colgroup>
<col style="width: 60%" />
<col style="width: 39%" />
</colgroup>
<thead>
<tr>
<th><strong>Kalimat</strong></th>
<th><strong>Pola</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Rizal dan Galih – sedang mempelajari – Bahasa Inggris.</td>
<td>S-P-O</td>
</tr>
<tr>
<td>Tina – memakan – buah apel.</td>
<td>S-P-O</td>
</tr>
<tr>
<td>Saudaraku – mengendarai – mobil.</td>
<td>S-P-O</td>
</tr>
</tbody>
</table></div>
<p><strong>3. Kalimat SPK (Subjek, Predikat, dan Keterangan)</strong></p>
<blockquote>
<p>Kalimat SPK mempunyai unsur kalimat subjek, predikat, dan keterangan. Keterangan ini bisa berupa keterangan waktu, tempat, cara, dll. Contoh penggunaan kalimat SPK:</p>
</blockquote>
<div class="mt-table-wrap"><table>
<colgroup>
<col style="width: 60%" />
<col style="width: 39%" />
</colgroup>
<thead>
<tr>
<th><strong>Kalimat</strong></th>
<th><strong>Pola</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Farhan – berolahraga – di sore hari.</td>
<td>S-P-K (Waktu)</td>
</tr>
<tr>
<td>Teman baikku – sedang pergi – ke Lampung.</td>
<td>S-P-K (Tempat)</td>
</tr>
<tr>
<td>Livia – makan – dengan tergesa-gesa.</td>
<td>S-P-K (Cara)</td>
</tr>
</tbody>
</table></div>
<p><strong>4. Kalimat SP-Pel (Subjek, Predikat, dan Pelengkap)</strong></p>
<blockquote>
<p>Kalimat SP-Pel mempunyai unsur kalimat subjek, predikat, dan pelengkap. Kata pelengkap ini bentuknya seperti objek, tetapi dia hanya bersifat melengkapi objek sebagai tambahan informasi dari sebuah kalimat. Contoh penggunaan kalimat SP-Pel:</p>
</blockquote>
<div class="mt-table-wrap"><table>
<colgroup>
<col style="width: 60%" />
<col style="width: 39%" />
</colgroup>
<thead>
<tr>
<th><strong>Kalimat</strong></th>
<th><strong>Pola</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Saya – belajar – Bahasa Indonesia.</td>
<td>S-P-Pel</td>
</tr>
<tr>
<td>Padi – ditanam – oleh Bibiku.</td>
<td>S-P-Pel</td>
</tr>
<tr>
<td>Vina – merupakan – siswa SMA Al-Hikmah.</td>
<td>S-P-Pel</td>
</tr>
</tbody>
</table></div>
<p><strong>5. Kalimat SPOK (Subjek, Predikat, Objek, dan Keterangan)</strong></p>
<blockquote>
<p>Pola kalimat SPOK mempunyai unsur kalimat subjek, predikat, objek, dan keterangan. Berikut contoh pola kalimat SPOK:</p>
</blockquote>
<div class="mt-table-wrap"><table>
<colgroup>
<col style="width: 60%" />
<col style="width: 39%" />
</colgroup>
<thead>
<tr>
<th><strong>Kalimat</strong></th>
<th><strong>Pola</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Arga – mengendarai – motor – di siang hari.</td>
<td>S-P-O-K</td>
</tr>
<tr>
<td>Pandu – mengetik – artikel – di kamarnya.</td>
<td>S-P-O-K</td>
</tr>
<tr>
<td>Wulan – menjahit – pakaian – dengan sangat ahli.</td>
<td>S-P-O-K</td>
</tr>
</tbody>
</table></div>
<p><strong>6. Kalimat SPO-Pel (Subjek, Predikat, Objek, dan Pelengkap)</strong></p>
<blockquote>
<p>Kalimat SPO-Pel memiliki unsur kalimat subjek, predikat, objek, dan pelengkap. Contoh penggunaan kalimat SPO-Pel:</p>
</blockquote>
<div class="mt-table-wrap"><table>
<colgroup>
<col style="width: 60%" />
<col style="width: 39%" />
</colgroup>
<thead>
<tr>
<th><strong>Kalimat</strong></th>
<th><strong>Pola</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Bapak Guru – mengirimkan – dia – surat.</td>
<td>S-P-O-Pel</td>
</tr>
<tr>
<td>Taufik – membelikan – adiknya – kalung emas.</td>
<td>S-P-O-Pel</td>
</tr>
<tr>
<td>Mira – memberikan – kakaknya – buah apel.</td>
<td>S-P-O-Pel</td>
</tr>
</tbody>
</table></div>
<p><strong>7. Kalimat SP-Pel-K (Subjek, Predikat, Pelengkap, dan Keterangan)</strong></p>
<blockquote>
<p>Kalimat SP-Pel-K mempunyai unsur kalimat subjek, predikat, pelengkap, dan keterangan. Contoh kalimat SP-Pel-K:</p>
</blockquote>
<div class="mt-table-wrap"><table>
<colgroup>
<col style="width: 60%" />
<col style="width: 39%" />
</colgroup>
<thead>
<tr>
<th><strong>Kalimat</strong></th>
<th><strong>Pola</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Naila – bermain – piano – di GSG.</td>
<td>S-P-Pel-K</td>
</tr>
<tr>
<td>Salwa – dikejar – mantannya – sore hari tadi.</td>
<td>S-P-Pel-K</td>
</tr>
<tr>
<td>Hendra – merupakan – siswa – di SMA Metro.</td>
<td>S-P-Pel-K</td>
</tr>
</tbody>
</table></div>
<p><strong>8. Kalimat SPO-Pel-K (Subjek, Predikat, Objek, Pelengkap, dan Keterangan)</strong></p>
<blockquote>
<p>Kalimat SPO-Pel-K memiliki unsur subjek, predikat, objek, pelengkap, dan keterangan. Contoh kalimat SPO-Pel-K:</p>
</blockquote>
<div class="mt-table-wrap"><table>
<colgroup>
<col style="width: 60%" />
<col style="width: 39%" />
</colgroup>
<thead>
<tr>
<th><strong>Kalimat</strong></th>
<th><strong>Pola</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Fikri – memberikan – pacarnya – kado – saat ulang tahun.</td>
<td>S-P-O-Pel-K</td>
</tr>
<tr>
<td>Irfan – mentraktir – Lala – semangkuk bakso – di kedai kopi.</td>
<td>S-P-O-Pel-K</td>
</tr>
<tr>
<td>Hana – membelikan – Yuni – baju batik – minggu kemarin.</td>
<td>S-P-O-Pel-K</td>
</tr>
</tbody>
</table></div>
`
    },
    {
      id: "tema5",
      nama: "Silogisme",
      konten: `
<h3>1. PENARIKAN KESIMPULAN</h3>
<p>Penarikan kesimpulan dilakukan dari beberapa pernyataan yang diketahui nilai kebenarannya yang disebut premis. Kemudian, dengan menggunakan prinsip-prinsip logika diperoleh pernyataan baru yang disebut kesimpulan/konklusi yang diturunkan dari premis yang ada.</p>
<h3>A. MACAM-MACAM LOGIKA</h3>
<h4>1. Disjungsi = atau (∨)</h4>
<p>Disjungsi adalah pernyataan majemuk dengan kata hubung “atau”. Digunakan untuk menentukan pilihan sehingga harus memilih salah satu saja.</p>
<p>p ∨ q dibaca p atau q.</p>
<p>Contoh:</p>
<blockquote>
<p>Premis 1: Raka diterima kuliah di PKN STAN atau UGM.</p>
<p>Premis 2: Ternyata tidak kuliah di UGM.</p>
<p>Kesimpulan: Raka kuliah di PKN STAN.</p>
</blockquote>
<h4>2. Konjungsi = dan, tapi, tetapi, juga (∧)</h4>
<p>Konjungsi adalah pernyataan majemuk dengan kata hubung “dan”. Konjungsi bernilai benar jika terpenuhi semuanya (kedua pernyataan benar).</p>
<p>p ∧ q dibaca p dan q.</p>
<p>Contoh:</p>
<blockquote>
<p>Premis 1: Semua pantai berpasir dan panas.</p>
<p>Premis 2: Gita berada di tempat yang tidak berpasir dan tidak panas.</p>
<p>Kesimpulan: Gita berada di bukan pantai.</p>
</blockquote>
<h4>3. Implikasi = jika…maka… (→)</h4>
<p>Implikasi adalah pernyataan majemuk dengan kata hubung “jika…maka…”.</p>
<p>p → q dibaca jika p maka q. Juga bisa dibaca q jika p.</p>
<p>Contoh: Jika aku makan maka aku kenyang.</p>
<h4>4. Biimplikasi = jika dan hanya jika (↔︎)</h4>
<p>Biimplikasi adalah pernyataan majemuk dengan kata hubung “…jika dan hanya jika…”.</p>
<p>p ↔︎ q dibaca p jika dan hanya jika q.</p>
<p>Contoh: Manusia dapat hidup dengan sehat jika dan hanya jika asupan nutrisi terpenuhi.</p>
<h3>Tidak Ada (lanjutan)</h3>
<p>Secara simbolis, tidak ada x yang memiliki sifat P(x) dapat ditulis sebagai: ~(∃x P(x))</p>
<p>Ini setara dengan mengatakan bahwa semua anggota tidak memiliki sifat tersebut, atau dalam simbol: ∀x (~P(x))</p>
<p><strong>Contoh Tidak Ada:</strong></p>
<blockquote>
<p>Premis: Tidak ada buah di keranjang yang busuk.</p>
<p>Artinya, tidak ada satu pun buah di keranjang yang dalam kondisi busuk. Dengan kata lain, semua buah di keranjang adalah tidak busuk.</p>
</blockquote>
<h4>I. Perbandingan Tidak Semua dan Tidak Ada</h4>
<p><strong>Tidak semua</strong> berarti ada sebagian anggota yang tidak memenuhi kondisi tertentu.</p>
<p><strong>Tidak ada</strong> berarti tidak ada satu pun anggota yang memenuhi kondisi tersebut.</p>
<p><strong>Contoh Perbandingan:</strong></p>
<ul>
<li><p>Tidak semua anak di taman bermain memakai topi.</p></li>
</ul>
<blockquote>
<p>Ada beberapa anak yang tidak memakai topi. Bisa jadi ada yang memakai dan ada yang tidak.</p>
</blockquote>
<ul>
<li><p>Tidak ada anak di taman bermain yang memakai topi.</p></li>
</ul>
<blockquote>
<p>Tidak ada satu pun anak yang memakai topi. Semua anak tidak memakai topi.</p>
</blockquote>
`
    },
    {
      id: "tema6",
      nama: "Pola Bilangan",
      konten: `
<h3>1. Pola Bilangan</h3>
<p>Materi pola bilangan merupakan salah satu materi favorit yang selalu muncul di SKD CPNS maupun Kedinasan. Untuk mengerjakan materi ini gunakan <strong>pola geser</strong> dan <strong>pola melompat</strong>. Usahakan teman-teman menggunakan pola geser terlebih dahulu baru pola melompat.</p>
<p><strong>a.</strong> 64, 63, 65, 64, x, 65, 67, 66</p>
<blockquote>
<p>A. 64 D. 68</p>
<p>B. 65 E. 70</p>
<p>C. 66</p>
</blockquote>
<p class="mt-pembahasan"><strong>Pembahasan:</strong></p>
<p><strong>Cara 1 : cara geser</strong></p>
<blockquote>
<p>64, 63, 65, 64, 66, 65, 67, 66</p>
<p>Selisih antar suku: −1, +2, −1, +2, −1, +2, −1</p>
</blockquote>
<p><strong>Cara 2 : cara melompat</strong></p>
<blockquote>
<p>Suku ke-1, 3, 5, 7: 64, 65, 66, 67 (+1 tiap lompatan)</p>
<p>Suku ke-2, 4, 6, 8: 63, 64, 65, 66 (+1 tiap lompatan)</p>
</blockquote>
<p>Kalau kita perhatikan cara geser lebih aman daripada pola melompat.</p>
<p class="mt-jawaban"><strong>Jawaban: C</strong></p>
<p><strong>b.</strong> 50, 40, 100, 90, x, 140, 200, 190</p>
<blockquote>
<p>A. 120 D. 150</p>
<p>B. 130 E. 160</p>
<p>C. 140</p>
</blockquote>
<p class="mt-pembahasan"><strong>Pembahasan:</strong></p>
<p><strong>Cara 1 : cara geser</strong></p>
<blockquote>
<p>50, 40, 100, 90, 150, 140, 200, 190</p>
<p>Selisih antar suku: −10, +60, −10, +60, −10, +60, −10</p>
</blockquote>
<p><strong>Cara 2 : cara melompat</strong></p>
<blockquote>
<p>Suku ke-1, 3, 5, 7: 50, 100, 150, 200 (+50 tiap lompatan)</p>
<p>Suku ke-2, 4, 6, 8: 40, 90, 140, 190 (+50 tiap lompatan)</p>
</blockquote>
<p class="mt-jawaban"><strong>Jawaban: D</strong></p>
<p><strong>c.</strong> 27, 23, 19, 15, 11, …, …</p>
<blockquote>
<p>A. 9,5 D. 10,6</p>
<p>B. 8,4 E. 11,7</p>
<p>C. 7,3</p>
</blockquote>
<p class="mt-pembahasan"><strong>Pembahasan:</strong></p>
<blockquote>
<p>27, 23, 19, 15, 11, 7, 3</p>
<p>Selisih antar suku: −4 setiap suku</p>
</blockquote>
<p class="mt-jawaban"><strong>Jawaban: C</strong></p>
<p><strong>d.</strong> 7, 13, 25, 49, …, …</p>
<blockquote>
<p>A. 93, 183 D. 94, 190</p>
<p>B. 97, 193 E. 92, 192</p>
<p>C. 95, 191</p>
</blockquote>
<p class="mt-pembahasan"><strong>Pembahasan:</strong></p>
<p><strong>Cara 1</strong></p>
<blockquote>
<p>7, 13, 25, 49, 97, 193</p>
<p>Selisih: +6, +12, +24, +48, +96 (setiap selisih dikali 2)</p>
</blockquote>
<p><strong>Cara 2</strong></p>
<blockquote>
<p>7, 13, 25, 49, 97, 193 → setiap suku: ×2 −1</p>
</blockquote>
<p class="mt-jawaban"><strong>Jawaban: B</strong></p>
<p><strong>e.</strong> 31, 32, 36, 37, 46, 47, 66, 67, …, …</p>
<blockquote>
<p>A. 100, 109 D. 104, 109</p>
<p>B. 102, 108 E. 103, 108</p>
<p>C. 106, 107</p>
</blockquote>
<p class="mt-pembahasan"><strong>Pembahasan:</strong></p>
<blockquote>
<p>31, 32, 36, 37, 46, 47, 66, 67, 106, 107</p>
<p>Suku ke-1, 3, 5, 7, 9: 31, 36, 46, 66, 106 → selisih +5, +10, +20, +40 (dikali 2 tiap langkah)</p>
<p>Suku ke-2, 4, 6, 8, 10: 32, 37, 47, 67, 107 → selisih +5, +10, +20, +40 (dikali 2 tiap langkah)</p>
</blockquote>
<p class="mt-jawaban"><strong>Jawaban: C</strong></p>
<p><strong>36.</strong> 212, 101, 313, −212, 101, −313, −212, −101, …, …</p>
<p class="mt-pembahasan"><strong>Pembahasan:</strong> (diagram pembahasan pada scan berupa kotak dan tanda +/−)</p>
<blockquote>
<p>212, 101, 313, −212, 101, −313, −212, −101, −313, 212</p>
</blockquote>
<p class="mt-jawaban"><strong>Jawaban: A</strong></p>
`
    },
    {
      id: "tema7",
      nama: "Perbandingan Senilai dan Tak Senilai",
      konten: `
<h3>1. PERBANDINGAN SENILAI</h3>
<p>Perbandingan senilai merupakan perbandingan dengan dua variabel atau lebih yang apabila suatu variabel bertambah maka variabel lainnya juga ikut bertambah dan berlaku sebaliknya.</p>
<p>Simple nya,</p>
<ul>
<li><p><strong>Kiri (+) → Kanan (+)</strong> – Jika ruas kiri bertambah maka ruas kanan juga bertambah</p></li>
<li><p><strong>Kiri (−) → Kanan (−)</strong> – Jika ruas kiri berkurang maka ruas kanan juga berkurang</p></li>
</ul>
<p><strong>Contoh:</strong></p>
<p>Sebuah mesin mampu mencetak 3 permen. Berapa banyak permen yang tercetak jika yang bekerja ada 4 mesin?</p>
<blockquote>
<p>A. 7 D. 15</p>
<p>B. 9 E. 16</p>
<p>C. 12</p>
</blockquote>
<p class="mt-pembahasan"><strong>Pembahasan:</strong></p>
<blockquote>
<p>1 mesin → 3 permen</p>
<p>4 mesin → x permen</p>
</blockquote>
<p>Semakin banyak mesin yang bekerja maka semakin banyak juga permen yang tercetak, sehingga perbandingan ini merupakan perbandingan senilai.</p>
<p>1/4 = 3/x</p>
<p>x = 3 · 4</p>
<p>x = 12</p>
<p>Jadi, banyak permen yang tercetak jika yang bekerja ada 4 mesin adalah 12 permen.</p>
<h3>2. PERBANDINGAN TAK SENILAI</h3>
<p>Perbandingan tak senilai merupakan perbandingan dengan dua variabel atau lebih yang apabila suatu variabel bertambah maka variabel lainnya jadi berkurang dan berlaku sebaliknya.</p>
<p>Simple nya,</p>
<ul>
<li><p><strong>Kiri (+) → Kanan (−)</strong> – Jika ruas kiri bertambah maka ruas kanan menjadi berkurang</p></li>
<li><p><strong>Kiri (−) → Kanan (+)</strong> – Jika ruas kiri berkurang maka ruas kanan menjadi bertambah</p></li>
</ul>
<p><strong>Contoh:</strong></p>
<p>Suatu pekerjaan dikerjakan oleh 12 orang dalam waktu 6 hari. Berapa banyak orang yang dibutuhkan agar pekerjaan tersebut selesai dalam 3 hari?</p>
<blockquote>
<p>A. 7 D. 15</p>
<p>B. 9 E. 16</p>
<p>C. 24</p>
</blockquote>
<p class="mt-pembahasan"><strong>Pembahasan:</strong></p>
<blockquote>
<p>12 orang → 6 hari</p>
<p>x orang → 3 hari</p>
</blockquote>
<p>Semakin banyak orang yang bekerja maka semakin cepat pekerjaan akan selesai, sehingga waktu yang dibutuhkan semakin singkat atau sedikit. Perbandingan ini merupakan perbandingan tak senilai.</p>
<p>12/x = 3/6</p>
<p>12 · 6 = 3 · x</p>
<p>x = (12 · 6)/3</p>
<p>x = 24</p>
<p>Jadi, banyak orang yang dibutuhkan agar pekerjaan selesai dalam 3 hari adalah 24 orang.</p>
`
    },
    {
      id: "tema8",
      nama: "Figural 9 Kotak",
      konten: `
<h3>1. FIGURAL 9 KOTAK</h3>
<p>Tes Figural atau tes gambar dalam SKD CPNS bertujuan untuk mengukur kemampuan analitis, logika visual, dan pola pikir peserta. Subtes ini penting karena membantu menilai kemampuan memahami pola, menemukan hubungan, dan menarik kesimpulan berdasarkan gambar.</p>
<p>Tes Figural terbagi menjadi:</p>
<blockquote>
<p>a. <strong>Figural Serial</strong> yaitu mengurutkan pola berdasarkan aturan tertentu.</p>
<p>b. <strong>Figural Analogi</strong> yaitu menemukan hubungan atau pasangan pola yang logis.</p>
<p>c. <strong>Figural Ketidaksamaan</strong> yaitu mengidentifikasi gambar yang tidak sesuai dalam sebuah kelompok.</p>
<p>d. <strong>Figural 9 Kotak</strong> (mulai SKD CPNS 2023) yaitu mengidentifikasi pola gambar berirama dalam kotak 3x3.</p>
</blockquote>
<h3>2. KONSEP FIGURAL 9 KOTAK</h3>
<p>Figural 9 kotak dikenal juga dengan nama gambar berirama. Pada tes ini, peserta diminta untuk menemukan pola atau irama yang menghubungkan gambar di kotak-kotak sebelumnya. Kemudian menggunakan pola tersebut untuk menentukan gambar yang belum diketahui.</p>
<p><strong>Ciri-ciri:</strong></p>
<blockquote>
<p>a. Kotak berukuran 3x3 (9 kotak).</p>
<p>b. Pola dapat bergerak horizontal, vertikal, atau diagonal.</p>
<p>c. Pola bisa berupa pengulangan, perubahan bentuk, atau kombinasi atribut (warna, arah, jumlah, ukuran, dll.).</p>
</blockquote>
<h3>3. CARA MENGERJAKAN FIGURAL 9 KOTAK</h3>
<p>Langkah-langkah:</p>
<blockquote>
<p>a. Amati pola secara keseluruhan.</p>
<p>b. Perhatikan hubungan antara gambar dalam baris, kolom, atau diagonal.</p>
<p>c. Identifikasi elemen-elemen pola.</p>
<p>d. Apa yang berubah? Bentuk, arah, warna, jumlah, atau posisi?</p>
<p>e. Uji hipotesis pola.</p>
<p>f. Coba terapkan pola pada gambar-gambar sebelumnya.</p>
<p>g. Tentukan gambar yang hilang.</p>
<p>h. Gunakan pola untuk mengisi kotak yang ditanyakan.</p>
</blockquote>
<p><strong>Tips:</strong></p>
<ul>
<li><p>Jangan terpaku pada satu jenis pola; pola bisa melibatkan lebih dari satu elemen.</p></li>
<li><p>Periksa hubungan gambar dari berbagai arah: horizontal, vertikal, dan diagonal.</p></li>
</ul>
<h3>CONTOH:</h3>
<p><strong>1.</strong> Perhatikan gambar berikut!</p>
<div class="mt-fig"><img src="images/materi-tiu/t8_1_soal.png" alt="Gambar soal dan pembahasan" loading="lazy"></div>
<p class="mt-pembahasan"><strong>Pembahasan:</strong></p>
<div class="mt-fig"><img src="images/materi-tiu/t8_1_pemb1.png" alt="Gambar soal dan pembahasan" loading="lazy"></div>
<ul>
<li><p>Baris 1 dan baris 2 memiliki pola. Kemudian kolom ketiga merupakan gabungan dari kolom pertama dan kedua. Gambar dikolom pertama mengisi kekosongan garis yang ada pada kolom kedua, kemudian dari kolom kedua berotasi 90° searah jarum jam.</p></li>
<li><p>Dengan menggunakan pola yang sama, maka gambar pada baris ketiga kolom ketiga adalah:</p></li>
</ul>
<div class="mt-fig"><img src="images/materi-tiu/t8_1_pemb2.png" alt="Gambar soal dan pembahasan" loading="lazy"></div>
<p class="mt-jawaban"><strong>Jawaban: C</strong></p>
<p><strong>2.</strong></p>
<div class="mt-fig"><img src="images/materi-tiu/t8_2_soal.png" alt="Gambar soal dan pembahasan" loading="lazy"></div>
<p class="mt-pembahasan"><strong>Pembahasan:</strong></p>
<div class="mt-fig"><img src="images/materi-tiu/t8_2_pemb.png" alt="Gambar soal dan pembahasan" loading="lazy"></div>
<p>Pola pada kolom ke-1 dan ke-2, semakin kebawah objeknya berkurang 1 setiap barisnya. Sehingga pola kolom baris ke 3 kolom ke 3 adalah:</p>
<div class="mt-fig"><img src="images/materi-tiu/t8_2_jwb.png" alt="Gambar soal dan pembahasan" loading="lazy"></div>
<p class="mt-jawaban"><strong>Jawaban: D</strong></p>
<p><strong>3.</strong></p>
<div class="mt-fig"><img src="images/materi-tiu/t8_3_soal.png" alt="Gambar soal dan pembahasan" loading="lazy"></div>
<p class="mt-pembahasan"><strong>Pembahasan:</strong></p>
<p>Tiap baris dan kolom terdapat objek bintang, bulat besar, bulat kecil, segitiga dan persegi panjang. Setiap kolom memiliki objek yang berotasi 45° searah jarum jam dan warna hitam mengisi objek berurutan secara bergantian.</p>
<p class="mt-jawaban"><strong>Jawaban: B</strong></p>
`
    },
    {
      id: "tema9",
      nama: "Figural",
      konten: `
<h3>FIGURAL</h3>
<p>Tes Figural atau tes gambar pada tes CPNS atau Kedinasan merupakan salah satu subtes yang digunakan untuk mengukur pemahaman analitis para peserta tes SKD. Tes figural yang ada di SKD terbagi menjadi 3 materi yaitu figural serial, figural analogi, dan figural ketidaksamaan.</p>
<h4>a. FIGURAL SERIAL</h4>
<p><strong>1.</strong></p>
<div class="mt-fig"><img src="images/materi-tiu/t9_s1_soal.png" alt="Gambar soal dan pembahasan" loading="lazy"></div>
<p class="mt-pembahasan"><strong>Pembahasan:</strong></p>
<div class="mt-fig"><img src="images/materi-tiu/t9_s1_pemb.png" alt="Gambar soal dan pembahasan" loading="lazy"></div>
<p>Setiap objek bergerak ke atas sejauh 2 objek.</p>
<p class="mt-jawaban"><strong>Jawaban: C</strong></p>
<p><strong>2.</strong></p>
<div class="mt-fig"><img src="images/materi-tiu/t9_s2_soal.png" alt="Gambar soal dan pembahasan" loading="lazy"></div>
<p class="mt-pembahasan"><strong>Pembahasan:</strong></p>
<div class="mt-fig"><img src="images/materi-tiu/t9_s2_pemb.png" alt="Gambar soal dan pembahasan" loading="lazy"></div>
<p>Objek pada gambar nomor 5 sama persis seperti objek pada gambar nomor 1. Sehingga, objek pada gambar nomor 6 akan sama persis seperti objek pada gambar nomor 2.</p>
<p class="mt-jawaban"><strong>Jawaban: D</strong></p>
<h4>b. FIGURAL ANALOGI</h4>
<p><strong>1.</strong></p>
<div class="mt-fig"><img src="images/materi-tiu/t9_a1_soal.png" alt="Gambar soal dan pembahasan" loading="lazy"></div>
<p class="mt-pembahasan"><strong>Pembahasan:</strong></p>
<div class="mt-fig"><img src="images/materi-tiu/t9_a1_p1.png" alt="Gambar soal dan pembahasan" loading="lazy"></div>
<p>Objek pada gambar tersebut berotasi satu: objek pada gambar 1) yang terletak di atas berpindah ke tengah gambar 2), objek pada gambar 1) yang terletak di tengah berpindah ke bawah gambar 2), objek pada gambar 1) yang terletak di bawah berpindah ke atas gambar 2).</p>
<div class="mt-fig"><img src="images/materi-tiu/t9_a1_p2.png" alt="Gambar soal dan pembahasan" loading="lazy"></div>
<p>Pola gambar nomor 3 ke nomor 4 sama dengan pola gambar nomor 1 ke nomor 2. Pada objek putih hitam berubah menjadi hitam putih.</p>
<div class="mt-fig"><img src="images/materi-tiu/t9_a1_p3.png" alt="Gambar soal dan pembahasan" loading="lazy"></div>
<p>Pola gambar nomor 3 ke nomor 4 sama dengan pola gambar nomor 1 ke nomor 2. Pada objek segitiga ke atas berubah menjadi segitiga ke bawah.</p>
<div class="mt-fig"><img src="images/materi-tiu/t9_a1_p4.png" alt="Gambar soal dan pembahasan" loading="lazy"></div>
<p>Pola gambar nomor 3 ke nomor 4 sama dengan pola gambar nomor 1 ke nomor 2. Objek berotasi 90° searah jarum jam.</p>
<p class="mt-jawaban"><strong>Jawaban: D</strong></p>
<p><strong>2.</strong></p>
<div class="mt-fig"><img src="images/materi-tiu/t9_a2_soal.png" alt="Gambar soal dan pembahasan" loading="lazy"></div>
<p class="mt-pembahasan"><strong>Pembahasan:</strong></p>
<div class="mt-fig"><img src="images/materi-tiu/t9_a2_pemb.png" alt="Gambar soal dan pembahasan" loading="lazy"></div>
<p><strong>Pola gambar nomor 1 ke nomor 2</strong></p>
<p>Objek pada bagian atas pada gambar 1 berpindah ke bagian bawah pada gambar 2 dan dicerminkan.</p>
<p>Objek pada bagian bawah pada gambar 1 berpindah ke bagian atas pada gambar 2 dan dicerminkan.</p>
<p><strong>Pola gambar nomor 3 ke nomor 4 sama dengan pola gambar nomor 1 ke nomor 2.</strong></p>
<p class="mt-jawaban"><strong>Jawaban: E</strong></p>
<h4>c. FIGURAL KETAKSAMAAN</h4>
<p><strong>1.</strong></p>
<div class="mt-fig"><img src="images/materi-tiu/t9_k1_soal.png" alt="Gambar soal dan pembahasan" loading="lazy"></div>
<p class="mt-pembahasan"><strong>Pembahasan:</strong></p>
<blockquote>
<div class="mt-fig"><img src="images/materi-tiu/t9_k1_pemb.png" alt="Gambar soal dan pembahasan" loading="lazy"></div>
<p>Opsi A memiliki 4 objek cekung ke kanan dan 4 cekung ke kiri</p>
<p>Opsi B memiliki 4 objek cekung ke kanan dan 4 cekung ke kiri</p>
<p>Opsi C memiliki 4 objek cekung ke kanan dan 4 cekung ke kiri</p>
<p>Opsi D memiliki 4 objek cekung ke kanan dan 4 cekung ke kiri</p>
<p>Opsi E memiliki 5 objek cekung ke kanan dan 3 cekung ke kiri</p>
</blockquote>
<p>Sehingga E tidak memiliki pola yang sama.</p>
<p class="mt-jawaban"><strong>Jawaban: E</strong></p>
<p><strong>2.</strong></p>
<div class="mt-fig"><img src="images/materi-tiu/t9_k2_soal.png" alt="Gambar soal dan pembahasan" loading="lazy"></div>
<p class="mt-pembahasan"><strong>Pembahasan:</strong></p>
<div class="mt-fig"><img src="images/materi-tiu/t9_k2_pemb.png" alt="Gambar soal dan pembahasan" loading="lazy"></div>
<p>Pada gambar A, B, C, dan E terdapat objek yang sejajar. Sedangkan pada gambar D tidak terdapat objek yang sejajar. Sehingga D tidak memiliki pola yang sama.</p>
<p class="mt-jawaban"><strong>Jawaban: D</strong></p>
`
    },
    {
      id: "tema10",
      nama: "Logika Analitik",
      konten: `
<h3>1. SISTEM PANAH</h3>
<p>Metode ini memudahkan kita untuk menyelesaikan model soal Logika Analitik untuk tipe soal urutan, seperti urutan tinggi badan, berat badan, prestasi dll.</p>
<p><strong>Contoh:</strong></p>
<p><strong>a.</strong> Rizky dan Maya akan pergi berlibur sebagai pasangan kekasih yang baru saja menikah. Mereka akan mengunjungi 5 daerah di Lampung dengan ketentuan sebagai berikut:</p>
<blockquote>
<p>1) Daerah pertama yang dikunjungi mereka adalah Pesawaran karena ingin menikmati pemandangan Pulau Pahawang.</p>
<p>2) Bandarlampung harus dikunjungi di antara urutan kunjungan ke Pesawaran dan Merak Belatung.</p>
<p>3) Kasui harus dikunjungi sebelum ke Suoh.</p>
<p>4) Merak Belatung harus dikunjungi sebelum Kasui dan Suoh.</p>
</blockquote>
<p>Banyak cara mengunjungi Merak Belatung di urutan ke 3 adalah ….</p>
<blockquote>
<p>A. 3 D. Tidak terhingga</p>
<p>B. 2 E. Tidak dapat ditentukan</p>
<p>C. 1</p>
</blockquote>
<p class="mt-pembahasan"><strong>Pembahasan:</strong></p>
<p>Misal: P = Pesawaran, B = Bandarlampung, M = Merak Belatung, K = Kasui, S = Suoh</p>
<p><strong>Sistem Panah</strong></p>
<p>Tips: gambar panah dan urutkan sesuai dengan pernyataan yang diberikan, gambar panah lain jika ada pernyataan di luar pernyataan awal.</p>
<p>Pertama, siapkan panah dan tentukan tujuan arah panah, pada kasus ini semakin ke atas maka semakin akhir tempat tersebut dikunjungi.</p>
<p>Selanjutnya, susun pernyataan yang diketahui dari petunjuk yang paling jelas:</p>
<blockquote>
<p>1) Daerah pertama yang dikunjungi mereka adalah Pesawaran karena ingin menikmati pemandangan Pulau Pahawang.</p>
<p>2) Bandarlampung harus dikunjungi di antara urutan kunjungan ke Pesawaran dan Merak Belatung. Letakkan Bandarlampung di atas Pesawaran dan Merak Belatung di atas Bandarlampung.</p>
<p>3) Merak Belatung harus dikunjungi sebelum Kasui dan Suoh. Kasui harus dikunjungi sebelum ke Suoh. Sehingga letakkan Kasui di atas Merak Belatung dan Suoh di atas Kasui.</p>
</blockquote>
<p>Hasil panah (dari atas = akhir, ke bawah = awal):</p>
<div class="mt-table-wrap"><table>
<colgroup>
<col style="width: 27%" />
<col style="width: 36%" />
<col style="width: 36%" />
</colgroup>
<thead>
<tr>
<th><strong>Posisi</strong></th>
<th><strong>Daerah</strong></th>
<th rowspan="6"><img src="images/materi-tiu/t10_sistem_panah.png" alt="Gambar soal dan pembahasan" loading="lazy"></th>
</tr>
<tr>
<td>Akhir (atas)</td>
<td>S (Suoh)</td>
</tr>
<tr>
<td></td>
<td>K (Kasui)</td>
</tr>
<tr>
<td></td>
<td>M (Merak Belatung)</td>
</tr>
<tr>
<td></td>
<td>B (Bandarlampung)</td>
</tr>
<tr>
<td>Awal (bawah)</td>
<td>P (Pesawaran)</td>
</tr>
</thead>
<tbody>
</tbody>
</table></div>
<p>Berdasarkan pernyataan yang telah di susun, hanya bisa membentuk satu kemungkinan yang sudah pasti dimana Merak Belatung ada di urutan ke tiga. Sehingga, banyak cara mengunjungi Merak Belatung di urutan ke 3 adalah 1.</p>
<p class="mt-jawaban"><strong>Jawaban: C</strong></p>
<h3>2. DUDUK MELINGKAR</h3>
<p>Salah satu model soal yang ada di Logika Analitik adalah duduk melingkar. Berikut metode yang mudah untuk mengerjakan soal duduk melingkar.</p>
<p><strong>Contoh:</strong></p>
<p><strong>a.</strong> Bu Lena akan melakukan diskusi dengan enam siswanya dengan menempati delapan kursi yang tersusun melingkar.</p>
<blockquote>
<p>1) Bu Lena duduk berhadapan dengan Farhan.</p>
<p>2) Bayu terpisah satu kursi di kiri Bu Lena dan menghadap Anisa.</p>
<p>3) Citra duduk tepat di kanan Farhan dan menghadap Endah.</p>
</blockquote>
<p>Jika Anisa duduk di sebelah kursi kosong maka pernyataan yang salah adalah …</p>
<blockquote>
<p>A. Anisa dan Farhan dipisahkan oleh kursi kosong</p>
<p>B. Dimas menempati kursi tepat di kanan Bayu</p>
<p>C. Farhan dan Dimas dipisahkan oleh dua kursi</p>
<p>D. Endah terpisah dua kursi dengan kursi kosong</p>
<p>E. Bu Lena menempati kursi antara Dimas dan Endah</p>
</blockquote>
<p class="mt-pembahasan"><strong>Pembahasan:</strong></p>
<p>Misal: BL = Bu Lena, A = Anisa, B = Bayu, C = Citra, D = Dimas, F = Farhan, E = Endah</p>
<p>Pertama, gambar lingkaran dan beri delapan tempat untuk mengisi nama-nama. Selanjutnya, susun pernyataan yang diketahui secara melingkar. Sehingga terbentuk lingkaran dengan posisi (searah jarum jam dari atas): BL, B, C, F, kursi kosong, A, E.</p>
<div class="mt-fig"><img src="images/materi-tiu/t10_duduk_melingkar.png" alt="Gambar soal dan pembahasan" loading="lazy"></div>
<p>Berdasarkan gambar tersebut Endah hanya terpisah satu kursi dengan kursi kosong, sehingga pernyataan Endah terpisah dua kursi dengan kursi kosong bernilai salah.</p>
<p class="mt-jawaban"><strong>Jawaban: D</strong></p>
<h3>3. MENEMPATI POSISI</h3>
<p><strong>a.</strong> Enam siswa akan menempati enam kursi bernomor 1-6 dari kiri ke kanan.</p>
<blockquote>
<p>1) Fitri duduk bersebelahan dengan Dinda</p>
<p>2) Dinda menempati kursi bernomor 4</p>
<p>3) Elsa dengan Fitri dipisahkan dua kursi</p>
</blockquote>
<p>Jika Aulia duduk di sebelah kanan Dinda dan tidak mau menempati kursi ujung, maka pernyataan yang pasti benar adalah …</p>
<blockquote>
<p>A. Cantika menempati kursi nomor 1</p>
<p>B. Bimo menempati kursi nomor 1</p>
<p>C. Bimo menempati kursi nomor 2</p>
<p>D. Aulia menempati kursi nomor 5</p>
<p>E. Elsa menempati kursi nomor 5</p>
</blockquote>
<p class="mt-pembahasan"><strong>Pembahasan:</strong></p>
<p>Pertama, siapkan enam tempat untuk untuk mengisi nama-nama. Selanjutnya, susun pernyataan yang diketahui dari petunjuk yang paling jelas:</p>
<blockquote>
<p>1) Tempatkan Dinda di nomor 4.</p>
<p>2) Dari soal kita ketahui bahwa Aulia duduk di sebelah kanan Dinda dan tidak mau menempati kursi ujung, sehingga Aulia menempati kursi nomor 5.</p>
<p>3) Fitri duduk bersebelahan dengan Dinda, sehingga Fitri menempati nomor 3.</p>
<p>4) Elsa dan Fitri dipisahkan dua kursi, sehingga Elsa menempati kursi nomor 6.</p>
<p>5) Terdapat kursi nomor 1 dan 2 yang kosong, kursi tersebut kemungkinan diisi oleh Bimo dan Cantika</p>
<div class="mt-fig"><img src="images/materi-tiu/t10_menempati_posisi.png" alt="Gambar soal dan pembahasan" loading="lazy"></div>
<p>Sehingga Pernyataan yang pasti benar adalah Aulia menempati kursi nomor 5.</p>
<p class="mt-jawaban"><strong>Jawaban: D</strong></p>
</blockquote>
`
    },
    {
      id: "tema11",
      nama: "Tabel",
      konten: `
<h3>TABEL</h3>
<p>Materi analisis tabel merupakan materi yang pernah muncul di tes SKD CPNS 2021, 2023, dan 2024. Materi ini tidak keluar di kedinasan 2023, namun materi ini muncul di SKD kedinasan 2021, 2022, 2024, dan 2025.</p>
<p><strong>Tabel</strong> adalah daftar berisi ikhtisar sejumlah (besar) data informasi, biasanya berupa kata-kata dan bilangan yang tersusun secara bersistem, urut ke bawah dalam lajur dan deret tertentu dengan garis pembatas sehingga dapat dengan mudah disimak.</p>
<p><strong>Grafik</strong> adalah lukisan pasang surut suatu keadaan dengan garis atau gambar (tentang turun naiknya hasil, statistik, dan sebagainya). Umumnya grafik digunakan untuk membandingkan jumlah data. Selain itu, digunakan pula untuk menunjukkan fluktuasi suatu perkembangan jumlah, misalnya dalam rentang waktu lima tahun, enam tahun, sepuluh tahun, atau lebih. Dengan grafik, perbandingan serta naik turunnya suatu jumlah data akan lebih jelas.</p>
<h4>Langkah menjawab soal Tabel dan Grafik</h4>
<ul>
<li><p><strong>Membaca pertanyaan terlebih dahulu</strong> – Dengan membaca pertanyaan, kita dapat mengetahui apa yang diminta pada soal tersebut termasuk syarat-syarat yang berlaku untuk mendapatkan jawaban.</p></li>
<li><p><strong>Membaca keterangan tabel/grafik</strong> – Keterangan tersebut merupakan kunci penjelasan tentang data yang disampaikan, misalnya dalam bentuk urutan tahun, persentase, atau angka-angka. Hal ini sangat penting karena jika kita salah membaca maka jawaban yang kita dapatkan akan salah tentunya.</p></li>
<li><p><strong>Mengolah data jika diperlukan</strong> – Terkadang jawaban yang kita cari tidak langsung terlihat pada tabel/grafik. Kita perlu mengolah data terlebih dahulu, seperti menjumlahkan, mengalikan, mencari selisih, mencari median, rata-rata dan sebagainya.</p></li>
</ul>
<h4>TIPS!</h4>
<ul>
<li><p>Baca terlebih dahulu pertanyaannya</p></li>
<li><p>Beri tanda sesuai syarat yang ada di soal</p></li>
<li><p>Eliminasi jawaban sesuai data yang terdapat disoal</p></li>
</ul>
`
    }
  ]
};
