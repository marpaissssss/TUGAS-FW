import { useState } from 'react'
import { hasErrors, validateInput } from '../utils/validation.js'
import Field from './Field.jsx'

/**
 * Form dengan dua input (total harga dan nama pelanggan) dan tombol Cek & Hitung.
 *
 * @param {(data: { total: number, name: string }) => void} props.onSubmit
 *   Dipanggil saat isian valid.
 * @param {() => void} props.onInvalid
 *   Dipanggil saat isian belum valid.
 */
export default function DiscountForm({ onSubmit, onInvalid }) {
  const [total, setTotal] = useState('')
  const [name, setName] = useState('')
  const [errors, setErrors] = useState({ total: '', name: '' })

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = validateInput({ total, name })
    setErrors(nextErrors)

    if (hasErrors(nextErrors)) {
      onInvalid()
      return
    }

    onSubmit({ total: Number(total), name })
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <Field
        id="total"
        label="Total Harga Pembelian"
        prefix="Rp"
        error={errors.total}
        type="number"
        min="0"
        step="any"
        inputMode="decimal"
        placeholder="Contoh: 100000"
        autoComplete="off"
        value={total}
        onChange={(event) => setTotal(event.target.value)}
      />

      <Field
        id="name"
        label="Nama Pelanggan"
        error={errors.name}
        type="text"
        placeholder="Contoh: Madam"
        autoComplete="off"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <button className="button" type="submit">
        Cek &amp; Hitung
      </button>
    </form>
  )
}
