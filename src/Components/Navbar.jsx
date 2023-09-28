import React from 'react'
import { Link } from 'react-router-dom'
import { useDentistStates } from '../Context/Context'

import logo from "/images/1.png?url";
import styles from './Navbar.module.scss'


const Navbar = () => {

  const { state, dispatch } = useDentistStates();

  const toggleTheme = () => {
    dispatch({ type: 'SWITCH_THEME' });
  };


  return (
    <nav>
      <div>
        <img className={styles.logo} src={logo} alt='logo' />
        <Link className={styles.link} to='/'>Home</Link>
        <Link className={styles.link} to='/favs'>Favs</Link>
        <Link className={styles.link} to='/contact'>Contact</Link>
      </div>
      <div>
        <button className={styles.navButton} onClick={toggleTheme}>
          {state.theme ? 'Dark ' : 'Ligth'}
        </button>
      </div>

    </nav>
  )
}

export default Navbar

