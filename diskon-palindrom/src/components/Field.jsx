/**
 * Satu kolom isian: label, input, dan pesan error.
 * Props selain id, label, prefix, dan error diteruskan langsung ke <input>.
 */
export default function Field({ id, label, prefix, error, ...inputProps }) {
  const errorId = `${id}-error`

  return (
    <div className="field">
      <label className="field__label" htmlFor={id}>
        {label}
      </label>

      <div
        className={
          error ? 'field__control field__control--error' : 'field__control'
        }
      >
        {prefix && (
          <span className="field__prefix" aria-hidden="true">
            {prefix}
          </span>
        )}
        <input
          id={id}
          className="field__input"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          {...inputProps}
        />
      </div>

      {error && (
        <p className="field__error" id={errorId} role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
