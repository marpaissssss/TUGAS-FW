/**
 * Menyiapkan nama untuk diperiksa: semua huruf kecil dan tanpa spasi.
 * "Never Odd Or Even" -> "neveroddoreven"
 */
export function normalizeName(name) {
  return name.toLowerCase().replace(/\s+/g, '')
}

/**
 * Memecah teks menjadi array karakter.
 * Array.from dipakai (bukan split('')) agar emoji atau huruf khusus
 * tidak terpotong menjadi dua.
 */
export function toChars(text) {
  return Array.from(text)
}

/**
 * Membandingkan setiap karakter dengan pasangannya dari ujung yang berlawanan.
 * "madam" -> [true, true, true, true, true]
 * "budi"  -> [false, false, false, false]
 */
export function getMirrorMatches(text) {
  const chars = toChars(text)
  return chars.map((char, index) => char === chars[chars.length - 1 - index])
}

/**
 * True jika teks dibaca sama dari depan maupun dari belakang.
 * "madam" -> true, "budi" -> false
 */
export function isPalindrome(text) {
  return getMirrorMatches(text).every(Boolean)
}

/**
 * Jumlah karakter unik: karakter yang sama hanya dihitung satu kali.
 * "madam" -> m, a, d -> 3
 */
export function countUniqueChars(text) {
  return new Set(toChars(text)).size
}
