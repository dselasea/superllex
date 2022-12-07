import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.container}>
      <section className={styles.section_hot}>
        <div className={styles.section_content}>
        <h2>About Us</h2>
        <p>At Besnik Consultancy, we take pride in our values - service, integrity, and excellence</p>
        </div>
        <div class={styles.section_btn}>
          <button className={styles.btn}>Learn More</button>
        </div>
      </section>
    </section>
  )
}

export default About