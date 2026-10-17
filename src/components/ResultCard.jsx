function ResultCard({ items, total, notes = [] }) {
  return (
    <section className="result" aria-live="polite">
      <h2 className="result__title">Hasil Perhitungan</h2>

      <dl className="result__list">
        {items.map((item) => (
          <div className="result__row" key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>

      <div className="result__total">
        <span>{total.label}</span>
        <strong>{total.value}</strong>
      </div>

      {notes.length > 0 && (
        <ul className="result__notes">
          {notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default ResultCard