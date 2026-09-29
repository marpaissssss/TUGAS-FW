// Fungsi Utama (Logika Inti)
function hitungStatistikArray(arr) {
    if (arr.length === 0) return null;

    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const total = arr.reduce((acc, curr) => acc + curr, 0);
    const rataRata = total / arr.length;

    return { min, max, rataRata };
}

// Fungsi untuk menangani klik tombol di HTML
function prosesData() {
    const inputElement = document.getElementById("inputAngka");
    const daftarHasil = document.getElementById("daftarHasil");
    
    // Mengambil string dari input dan mengubahnya menjadi array angka
    // Menggunakan split(",") untuk memisahkan teks berdasarkan koma
    const nilaiInput = inputElement.value;
    const arrayAngka = nilaiInput.split(",")
                                .map(num => parseFloat(num.trim())) // Ubah teks ke angka
                                .filter(num => !isNaN(num));       // Buang input yang bukan angka

    if (arrayAngka.length === 0) {
        alert("Mohon masukkan angka yang valid!");
        return;
    }

    // Jalankan fungsi statistik
    const hasil = hitungStatistikArray(arrayAngka);

    // Tampilkan ke layar
    daftarHasil.innerHTML = `
        <li><strong>Nilai Minimum:</strong> ${hasil.min}</li>
        <li><strong>Nilai Maksimum:</strong> ${hasil.max}</li>
        <li><strong>Nilai Rata-rata:</strong> ${hasil.rataRata.toFixed(2)}</li>
    `;
}