/* NavBar.js */

import React from 'react';
import { NavLink } from 'react-router-dom';
// import Logo from '../../logoHenry.png'
import styles from './Navbar.module.css';
import Logo from "../../logo.png"

export default function NavBar() {
  return (
    <header className={styles.navbar}>
      <div>
        <img id="logo" src={Logo} width="70" height="70" className="d-inline-block align-top" alt="" style={{borderRadius:"50%"}} />
      </div>
      <nav>
        <ul className={styles.list}>
          <li className={styles.listitem}>
            <NavLink exact to="/" activeClassName={styles.active}>Home</NavLink>
            <NavLink to="/favs" activeClassName={styles.active}>Favoritas</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
