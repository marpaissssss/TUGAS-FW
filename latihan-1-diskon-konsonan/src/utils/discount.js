const DISKON_PER_KONSONAN = 2 // % untuk setiap huruf konsonan
const BONUS_NAMA_PANJANG = 5 // % jika nama lebih dari 2 kata
const DISKON_MAKSIMAL = 20 // % batas maksimal diskon

export function hitungKonsonan(nama) {
  // hanya huruf a-z yang bukan vokal; spasi, angka, dan simbol tidak dihitung
  return [...nama.toLowerCase()].filter(
    (c) => /[a-z]/.test(c) && !'aeiou'.includes(c)
  ).length
}

export function hitungKata(nama) {
  return nama.trim().split(/\s+/).filter(Boolean).length
}

export function hitungDiskonKonsonan(totalHarga, nama) {
  const jumlahKonsonan = hitungKonsonan(nama)
  const jumlahKata = hitungKata(nama)

  const bonus = jumlahKata > 2 ? BONUS_NAMA_PANJANG : 0
  const diskonMentah = jumlahKonsonan * DISKON_PER_KONSONAN + bonus
  const persenDiskon = Math.min(diskonMentah, DISKON_MAKSIMAL)

  const totalPotongan = (totalHarga * persenDiskon) / 100
  const hargaAkhir = totalHarga - totalPotongan

  return {
    jumlahKonsonan,
    jumlahKata,
    bonus,
    persenDiskon,
    dibatasi: diskonMentah > DISKON_MAKSIMAL,
    totalPotongan,
    hargaAkhir,
  }
}