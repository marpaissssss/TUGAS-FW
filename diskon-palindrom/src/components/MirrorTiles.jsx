import { getMirrorMatches, toChars } from '../utils/nameChecker.js'

/**
 * Menampilkan nama sebagai deretan kotak huruf. Setiap huruf dibandingkan
 * dengan pasangannya dari ujung yang berlawanan: cocok = hijau,
 * tidak cocok = kuning bergaris putus-putus.
 */
export default function MirrorTiles({ text }) {
  const chars = toChars(text)
  const matches = getMirrorMatches(text)

  return (
    <div className="tiles" role="img" aria-label={`Nama yang diperiksa: ${text}`}>
      {chars.map((char, index) => (
        <span
          key={index}
          className={matches[index] ? 'tile tile--match' : 'tile tile--miss'}
          style={{ '--i': index }}
          aria-hidden="true"
        >
          {char}
        </span>
      ))}
    </div>
  )
}
