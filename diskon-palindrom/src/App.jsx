import { useState } from 'react'
import DiscountForm from './components/DiscountForm.jsx'
import ResultCard from './components/ResultCard.jsx'
import {
  DISCOUNT_PER_UNIQUE_CHAR,
  MIN_PALINDROME_LENGTH,
  PALINDROME_DISCOUNT_PERCENT,
} from './constants/promo.js'
import { calculateDiscount } from './utils/discount.js'

export default function App() {
  // null = belum ada hasil yang ditampilkan.
  const [result, setResult] = useState(null)

  const handleSubmit = ({ total, name }) => {
    setResult(calculateDiscount(total, name))
  }

  const handleInvalid = () => setResult(null)

  return (
    <main className="app">
      <h1 className="app__title">Program Diskon Palindrom Nama</h1>
      <p className="app__lead">
        Nama palindrom (minimal {MIN_PALINDROME_LENGTH} karakter) seperti Anna,
        Bob, atau Madam mendapat diskon spesial {PALINDROME_DISCOUNT_PERCENT}%.
        Nama lain mendapat diskon {DISCOUNT_PER_UNIQUE_CHAR}% untuk setiap
        karakter unik. Spasi dan huruf besar/kecil diabaikan.
      </p>

      <div className="panel">
        <DiscountForm onSubmit={handleSubmit} onInvalid={handleInvalid} />
      </div>

      <div aria-live="polite">
        {result && <ResultCard result={result} />}
      </div>
    </main>
  )
}
