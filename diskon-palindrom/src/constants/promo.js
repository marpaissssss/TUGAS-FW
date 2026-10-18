// Aturan promo dikumpulkan di satu tempat supaya mudah diubah
// tanpa perlu menyentuh logika perhitungan.

// Diskon spesial untuk nama palindrom (dalam persen).
export const PALINDROME_DISCOUNT_PERCENT = 25

// Nama palindrom harus punya minimal sekian karakter agar dapat diskon spesial.
export const MIN_PALINDROME_LENGTH = 3

// Diskon (dalam persen) untuk setiap karakter unik pada nama yang bukan palindrom.
export const DISCOUNT_PER_UNIQUE_CHAR = 1

// Batas atas diskon supaya harga akhir tidak pernah negatif.
export const MAX_DISCOUNT_PERCENT = 100
