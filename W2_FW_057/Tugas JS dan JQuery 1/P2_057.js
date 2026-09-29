function hitungUsia(tahunLahir) {
    const tahunSekarang = new Date().getFullYear();
    const usia = tahunSekarang - tahunLahir;
    return usia;
}

document.getElementById('formUsia').addEventListener('submit', function(event) {
    event.preventDefault();

    const inputTahunLahir = document.getElementById('tahunLahir').value;

    const tahunLahir = parseInt(inputTahunLahir, 10);

  if (isNaN(tahunLahir) || tahunLahir <= 0) {
    document.getElementById('hasil').innerText = "Masukkan tahun lahir yang valid!";
    return;
  }

  const usia = hitungUsia(tahunLahir);

  if (usia < 0) {
    document.getElementById('hasil').innerText = "Tahun lahir lebih besar dari tahun sekarang!";
  } else {
    document.getElementById('hasil').innerText = `Usia Anda adalah ${usia} tahun`;
  }
});