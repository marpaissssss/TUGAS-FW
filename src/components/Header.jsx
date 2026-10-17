function Header({ label, title, subtitle }) {
  return (
    <header className="header">
      <span className="header__label">{label}</span>
      <h1 className="header__title">{title}</h1>
      <p className="header__subtitle">{subtitle}</p>
    </header>
  )
}

export default Header