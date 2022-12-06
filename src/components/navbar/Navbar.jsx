import React, { useState } from 'react'
import styles from './Navbar.module.css'
import Logo from '../../images/Logo.png'
import Search from '../../images/Search Icon.png'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  return (
    <div className={styles.container}>
      <header className={styles.navbar}>
      <img src={Logo} />
      <nav>
        <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Features</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
      <div className={styles.icon}>
          <img src={Search} alt="" />
        <div className={styles.mobile_btn} onClick={() => setNav(!nav)}>
      ☰
      </div>
      </div>
    </header>
    </div>
  )
}

export default Navbar