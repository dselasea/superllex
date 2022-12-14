import React from 'react'
import styles from './Start.module.css'

const Start = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.section_start}>
          <h3>Start your business today <span>for $0+ state fees.</span></h3>
        </div>
        <div className={styles.section_btns}>
          <button className={`${styles.section_btn} ${styles.section_btn_white}`}>Get Started</button>
          <button className={`${styles.section_btn} ${styles.section_btn_brown}`}>Contact Sales</button>
        </div>
      </div>
    </section>
  )
}

export default Start