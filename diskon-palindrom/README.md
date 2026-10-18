# Program Diskon Palindrom Nama

Aplikasi Vite + React (Vite 8, React 19) yang mengecek apakah nama pelanggan
palindrom, lalu menghitung diskon pembelian.

## Aturan promo

- Spasi dan perbedaan huruf besar/kecil diabaikan.
- Nama palindrom dengan minimal 3 karakter: **diskon spesial 25%**.
- Nama bukan palindrom: **diskon 1% untuk setiap karakter unik**
  (karakter yang sama tidak dihitung dua kali).

Input: Total Harga Pembelian, Nama Pelanggan, dan tombol **Cek & Hitung**.
Output: Status Nama, Jumlah Karakter Unik, Persentase Diskon, dan Harga
Pembelian Setelah Diskon.

## Menjalankan proyek ini

```bash
npm install
npm run dev
```

Buka alamat yang muncul di terminal (biasanya http://localhost:5173).

| Perintah          | Fungsi                                  |
| ----------------- | --------------------------------------- |
| `npm run dev`     | Menjalankan server pengembangan         |
| `npm run build`   | Membuat versi produksi di folder `dist` |
| `npm run preview` | Mencoba hasil build secara lokal        |
| `npm run lint`    | Memeriksa kode dengan Oxlint            |

## Langkah-langkah membuat proyek dari nol

1. **Cek Node.js.** Jalankan `node -v`; versinya harus 20.19 ke atas atau
   22.12 ke atas.
2. **Buat proyek Vite + React.**

   ```bash
   npm create vite@latest diskon-palindrom -- --template react
   cd diskon-palindrom
   npm install
   ```

3. **Pasang font (opsional).**

   ```bash
   npm install @fontsource-variable/plus-jakarta-sans
   ```

4. **Bersihkan file contoh bawaan Vite.** Hapus `src/App.css`,
   `src/index.css`, folder `src/assets`, dan `public/icons.svg`.
5. **Buat struktur folder** di dalam `src`: `components`, `constants`,
   `utils`, dan `styles`.
6. **Tulis file dari logika dulu, tampilan kemudian:**
   `constants/promo.js` → `utils/nameChecker.js` → `utils/discount.js` →
   `utils/format.js` → `utils/validation.js` → `components/Field.jsx` →
   `components/DiscountForm.jsx` → `components/MirrorTiles.jsx` →
   `components/ResultCard.jsx` → `App.jsx` → `styles/index.css`, lalu ubah
   `main.jsx` dan `index.html`.
7. **Jalankan** `npm run dev` dan coba contoh pada tabel di bawah.
8. **Build** dengan `npm run build` untuk memastikan tidak ada error.

## Struktur folder

```text
diskon-palindrom/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx               Titik masuk, memasang <App /> ke halaman
    ├── App.jsx                Judul, form, dan hasil; menyimpan state hasil
    ├── components/
    │   ├── Field.jsx          Satu kolom isian (label, input, pesan error)
    │   ├── DiscountForm.jsx   Form dua input dan tombol Cek & Hitung
    │   ├── MirrorTiles.jsx    Kotak huruf yang memperlihatkan pencocokan cermin
    │   └── ResultCard.jsx     Status nama, karakter unik, persentase, harga akhir
    ├── constants/
    │   └── promo.js           Angka aturan promo (25%, minimal 3, 1% per unik)
    ├── utils/
    │   ├── nameChecker.js     Normalisasi, cek palindrom, hitung karakter unik
    │   ├── discount.js        calculateDiscount(): menggabungkan semua aturan
    │   ├── validation.js      Validasi isian form
    │   └── format.js          Format Rupiah
    └── styles/
        └── index.css          Warna, tata letak, dan gaya komponen
```

Logika (`utils` dan `constants`) sengaja dipisah dari tampilan (`components`)
supaya mudah dibaca, diuji, dan diubah.

## Cara kerja logika

1. `normalizeName` mengubah nama menjadi huruf kecil dan menghapus spasi:
   "Never Odd Or Even" menjadi `neveroddoreven`.
2. `isPalindrome` membandingkan tiap karakter dengan pasangannya dari ujung
   yang berlawanan. Jika semuanya cocok, nama itu palindrom.
3. `countUniqueChars` memasukkan karakter ke `Set`; ukuran `Set` adalah jumlah
   karakter unik.
4. `calculateDiscount` menentukan persentase:
   - palindrom dan panjang minimal 3: 25%
   - selain itu: jumlah karakter unik × 1% (paling banyak 100%)

   Harga akhir = total − (total × persentase ÷ 100).

Nama yang simetris tetapi kurang dari 3 karakter (misalnya "Aa") tidak
mendapat diskon spesial; diskonnya dihitung per karakter unik.

## Contoh hasil (total pembelian Rp 100.000)

| Nama              | Setelah normalisasi | Status                | Karakter unik | Diskon | Harga akhir |
| ----------------- | ------------------- | --------------------- | ------------- | ------ | ----------- |
| Anna              | `anna`              | Palindrom             | 2             | 25%    | Rp 75.000   |
| Madam             | `madam`             | Palindrom             | 3             | 25%    | Rp 75.000   |
| Never Odd Or Even | `neveroddoreven`    | Palindrom             | 6             | 25%    | Rp 75.000   |
| Budi Santoso      | `budisantoso`       | Bukan Palindrom       | 9             | 9%     | Rp 91.000   |
| Ani               | `ani`               | Bukan Palindrom       | 3             | 3%     | Rp 97.000   |
| Aa                | `aa`                | Bukan Palindrom (< 3) | 1             | 1%     | Rp 99.000   |
