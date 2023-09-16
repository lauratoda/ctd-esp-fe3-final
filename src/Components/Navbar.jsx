import React from 'react'
import { Link } from 'react-router-dom'
import { useDentistStates } from '../Context/Context'
import '../index.css'
import logo from "/images/1.png?url";


const Navbar = () => {

  const { state, dispatch } = useDentistStates();

  const toggleTheme = () => {
    dispatch({ type: 'SWITCH_THEME' });
  };


  return (
    <nav className="navbar">
      <div className='nav1'>  
      <img className='logo' src={logo} alt='logo' />    
        <Link className="link" to='/'>Home</Link>
        <Link className="link" to='/favs'>Favs</Link>
        <Link className="link" to='/contact'>Contact</Link>
      </div>
      <div>
        <button onClick={toggleTheme}>
          {state.theme ? 'Dark mode ' : 'Ligth mode'}
        </button>
      </div>

    </nav>
  )
}

export default Navbar

/*onClick={handleChangeTheme} style={{background: theme.background, color:theme.font}}*/