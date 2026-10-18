export function formatRupiah(angka) {
  const digit = Number.isInteger(angka) ? 0 : 2
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: digit,
    maximumFractionDigits: digit,
  }).format(angka)
}