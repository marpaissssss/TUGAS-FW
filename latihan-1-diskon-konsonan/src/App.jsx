import { useState } from 'react'
import Header from './components/Header'
import DiscountForm from './components/DiscountForm'
import ResultCard from './components/ResultCard'
import { hitungDiskonKonsonan } from './utils/discount'
import { formatRupiah } from './utils/format'

function App() {
  const [harga, setHarga] = useState('')
  const [nama, setNama] = useState('')
  const [error, setError] = useState('')
  const [hasil, setHasil] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const totalHarga = Number(harga)

    if (!(totalHarga > 0)) {
      setError('Total harga pembelian harus berupa angka lebih dari 0.')
      setHasil(null)
      return
    }
    if (nama.trim() === '') {
      setError('Nama pelanggan tidak boleh kosong.')
      setHasil(null)
      return
    }

    setError('')
    setHasil(hitungDiskonKonsonan(totalHarga, nama))
  }

  const notes = []
  if (hasil?.bonus) notes.push(`Bonus ${hasil.bonus}% karena nama lebih dari 2 kata.`)
  if (hasil?.dibatasi) notes.push('Diskon dibatasi maksimal 20%.')

  return (
    <main className="app">
      <Header
        label="Latihan 1"
        title="Program Diskon Huruf Konsonan"
        subtitle="Diskon belanja berdasarkan jumlah huruf konsonan dan jumlah kata pada nama pelanggan."
      />

      <div className="app__body">
        <DiscountForm
          harga={harga}
          nama={nama}
          namaPlaceholder="Contoh: Budi Santoso"
          buttonLabel="Hitung Diskon"
          error={error}
          onHargaChange={setHarga}
          onNamaChange={setNama}
          onSubmit={handleSubmit}
        />

        {hasil && (
          <ResultCard
            items={[
              { label: 'Jumlah Huruf Konsonan', value: hasil.jumlahKonsonan },
              { label: 'Jumlah Kata', value: hasil.jumlahKata },
              { label: 'Persentase Diskon', value: `${hasil.persenDiskon}%` },
              { label: 'Total Potongan Harga', value: formatRupiah(hasil.totalPotongan) },
            ]}
            total={{
              label: 'Harga Pembelian Setelah Diskon',
              value: formatRupiah(hasil.hargaAkhir),
            }}
            notes={notes}
          />
        )}
      </div>
    </main>
  )
}

export default App