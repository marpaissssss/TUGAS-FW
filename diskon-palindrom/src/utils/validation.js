/**
 * Memeriksa isian form. Hasilnya berisi pesan error untuk tiap kolom;
 * string kosong berarti kolom tersebut valid.
 */
export function validateInput({ total, name }) {
  const errors = { total: '', name: '' }
  const amount = Number(total)

  if (total.trim() === '') {
    errors.total = 'Isi total harga pembelian.'
  } else if (!Number.isFinite(amount) || amount <= 0) {
    errors.total = 'Total harga harus lebih dari 0.'
  }

  if (name.trim() === '') {
    errors.name = 'Isi nama pelanggan.'
  }

  return errors
}

/** True jika ada minimal satu kolom yang error. */
export function hasErrors(errors) {
  return Object.values(errors).some(Boolean)
}
