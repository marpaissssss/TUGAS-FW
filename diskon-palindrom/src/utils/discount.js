import {
  DISCOUNT_PER_UNIQUE_CHAR,
  MAX_DISCOUNT_PERCENT,
  MIN_PALINDROME_LENGTH,
  PALINDROME_DISCOUNT_PERCENT,
} from '../constants/promo.js'
import {
  countUniqueChars,
  isPalindrome,
  normalizeName,
  toChars,
} from './nameChecker.js'

/**
 * Menghitung diskon berdasarkan nama pelanggan.
 *
 * 1. Nama dinormalisasi: huruf kecil dan tanpa spasi.
 * 2. Palindrom dengan minimal 3 karakter -> diskon spesial 25%.
 * 3. Selain itu -> diskon 1% untuk setiap karakter unik.
 *
 * @param {number} total Total harga pembelian
 * @param {string} name Nama pelanggan
 */
export function calculateDiscount(total, name) {
  const normalizedName = normalizeName(name)
  const length = toChars(normalizedName).length
  const uniqueChars = countUniqueChars(normalizedName)

  // Nama bisa "simetris" tetapi terlalu pendek (misalnya "aa") untuk promo.
  const isMirrored = isPalindrome(normalizedName)
  const isPalindromeName = isMirrored && length >= MIN_PALINDROME_LENGTH
  const isTooShort =
    isMirrored && length > 0 && length < MIN_PALINDROME_LENGTH

  const rawPercent = isPalindromeName
    ? PALINDROME_DISCOUNT_PERCENT
    : uniqueChars * DISCOUNT_PER_UNIQUE_CHAR
  const discountPercent = Math.min(rawPercent, MAX_DISCOUNT_PERCENT)

  const discountAmount = (total * discountPercent) / 100
  const finalPrice = total - discountAmount

  return {
    total,
    normalizedName,
    isPalindrome: isPalindromeName,
    isTooShort,
    uniqueChars,
    discountPercent,
    discountAmount,
    finalPrice,
  }
}
