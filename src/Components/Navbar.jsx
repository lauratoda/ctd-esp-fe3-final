import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/favs'>Favs</Link>
        <Link to='/contact'>Contact</Link>
              {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button >Change theme</button>
    </div>
  )
}

export default Navbar

/*onClick={handleChangeTheme} style={{background: theme.background, color:theme.font}}*/