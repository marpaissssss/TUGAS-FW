const rupiahFormatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
})

/** 75000 -> "Rp 75.000" */
export function formatRupiah(value) {
  return rupiahFormatter.format(value)
}
