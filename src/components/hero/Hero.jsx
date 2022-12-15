import React from 'react'
import styles from './Hero.module.css'
import ArrowDown from '../../images/Vector 3.png'

const Hero = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
      <div className={styles.header_pattern}></div>
      <div className={styles.header_img}>
        <div className={styles.header_content}>
          <h1>We Help You Make Modern Interior</h1>
          <p>We will help you to make an elegant and luxurious interior designed by professional interior designer.</p>
        </div>
        <div className={styles.header_arrow}>
          <img src={ArrowDown} alt="down arrow" />
        </div>
      </div>
    </header>
    </div>
  )
}

export default Hero