function DiscountForm({
  harga,
  nama,
  namaPlaceholder,
  buttonLabel,
  error,
  onHargaChange,
  onNamaChange,
  onSubmit,
}) {
  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="harga">Total Harga Pembelian</label>
        <div className="input-group">
          <span className="input-group__prefix">Rp</span>
          <input
            id="harga"
            type="number"
            min="0"
            placeholder="Contoh: 500000"
            value={harga}
            onChange={(e) => onHargaChange(e.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="nama">Nama Pelanggan</label>
        <input
          id="nama"
          type="text"
          maxLength={60}
          placeholder={namaPlaceholder}
          value={nama}
          onChange={(e) => onNamaChange(e.target.value)}
        />
      </div>

      {error && (
        <p className="form__error" role="alert">
          {error}
        </p>
      )}

      <button type="submit" className="btn">
        {buttonLabel}
      </button>
    </form>
  )
}

export default DiscountForm