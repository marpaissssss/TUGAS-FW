import { MIN_PALINDROME_LENGTH } from '../constants/promo.js'
import { formatRupiah } from '../utils/format.js'
import MirrorTiles from './MirrorTiles.jsx'

function getCaption({ isPalindrome, isTooShort }) {
  if (isPalindrome) {
    return 'Setiap huruf cocok dengan pasangannya dari ujung yang berlawanan.'
  }
  if (isTooShort) {
    return `Nama ini simetris, tetapi kurang dari ${MIN_PALINDROME_LENGTH} karakter sehingga tidak masuk promo palindrom.`
  }
  return 'Huruf kuning bergaris putus-putus tidak cocok dengan pasangannya dari ujung yang berlawanan.'
}

/**
 * Menampilkan hasil: status nama, jumlah karakter unik,
 * persentase diskon, dan harga setelah diskon.
 *
 * @param {object} props.result Keluaran dari calculateDiscount()
 */
export default function ResultCard({ result }) {
  const {
    total,
    normalizedName,
    isPalindrome,
    uniqueChars,
    discountPercent,
    discountAmount,
    finalPrice,
  } = result

  return (
    <section
      className={isPalindrome ? 'result result--palindrome' : 'result'}
      aria-label="Hasil perhitungan"
    >
      <MirrorTiles key={normalizedName} text={normalizedName} />
      <p className="result__note">{getCaption(result)}</p>

      <dl className="result__list">
        <div className="result__row">
          <dt className="result__term">Status Nama</dt>
          <dd className="result__value">
            <span
              className={isPalindrome ? 'badge badge--palindrome' : 'badge'}
            >
              {isPalindrome ? 'Palindrom' : 'Bukan Palindrom'}
            </span>
          </dd>
        </div>

        <div className="result__row">
          <dt className="result__term">Jumlah Karakter Unik</dt>
          <dd className="result__value">{uniqueChars}</dd>
        </div>

        <div className="result__row">
          <dt className="result__term">Persentase Diskon</dt>
          <dd className="result__value result__value--accent">
            {discountPercent}%
          </dd>
        </div>

        <div className="result__row result__row--final">
          <dt className="result__term">Harga Pembelian Setelah Diskon</dt>
          <dd className="result__value">
            <span className="result__final-price">
              {formatRupiah(finalPrice)}
            </span>
            <span className="result__saving">
              Hemat {formatRupiah(discountAmount)} dari {formatRupiah(total)}
            </span>
          </dd>
        </div>
      </dl>
    </section>
  )
}
