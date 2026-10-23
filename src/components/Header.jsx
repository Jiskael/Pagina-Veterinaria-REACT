import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header({ titulo, itemsMenu, darkMode, toggleDarkMode }) {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <>
      <header>
        <div className="nav_bar_container container">
          <h1 className="logo"><b>{titulo}</b></h1>
          <button
            type="button"
            className="nav_toggle"
            aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuAbierto}
            aria-controls="menu_principal"
            onClick={() => setMenuAbierto(!menuAbierto)}
          >
            {menuAbierto ? '✕' : '☰'}
          </button>
          <nav id="menu_principal" className={menuAbierto ? 'nav_bar abierto' : 'nav_bar'}>
            <ul>
              {
                itemsMenu && itemsMenu.map((item) => (
                  <li key={item.label}>
                    <Link to={item.href} onClick={() => setMenuAbierto(false)}>{item.label}</Link>
                  </li>
                ))
              }
              <li>
                <button onClick={toggleDarkMode} className="btn-dark-mode">
                  {darkMode ? '☀️' : '🌙'}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header;
