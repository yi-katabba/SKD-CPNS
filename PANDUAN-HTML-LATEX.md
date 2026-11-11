# Panduan HTML & LaTeX di soal

Berlaku untuk teks soal (`q`), pilihan (`opt`), dan `pembahasan`.

## HTML yang didukung
`<br>`, `<table> <tr> <th> <td>` (+ `thead/tbody/colspan/rowspan`), `<b> <i> <u> <s> <sup> <sub> <small> <span> <code>`, `<ul> <ol> <li>`, `<img>`.
Atribut yang diizinkan: `style` (disaring), `colspan`, `rowspan`, `align`, `valign`, `width`.
Tag lain (mis. `<script>`) ditampilkan sebagai teks biasa, bukan dijalankan.

## LaTeX (KaTeX, offline)
| Tulisan di file .js | Hasil |
|---|---|
| `$\\frac{3}{4}+\\frac{1}{2}$` | rumus sebaris |
| `\\(\\sqrt{2}\\)` | rumus sebaris |
| `$$x^2+y^2=r^2$$` atau `\\[ ... \\]` | rumus tampil di baris sendiri |
| `\\$5` | tanda dolar biasa |

Catatan: di dalam string JavaScript, backslash harus **ditulis ganda** (`\\frac`, bukan `\frac`).
Contoh opsi: `"$\\dfrac{7}{12}$"`, `"$2^{10} = 1.024$"`, `"$\\sqrt{169}=13$"`.
