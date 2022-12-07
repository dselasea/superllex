import React from 'react'
import styles from './About.module.css'
import Gallery from './Gallery'

const About = () => {
  const aboutInfo = [
    {
      id: 1,
      title: "Who We Are",
      description: "You get a 2-week free trial to kick the Smarty tries. We want you go."
    },
    {
      id: 2,
      title: "What Do We Do",
      description: "We give you a free course that guides you through the process."
    },
    {
      id: 3,
      title: "How Do We Help",
      description: "Use our multimedia lecturers, videos, and coaching sessions."
    },
    {
      id: 4,
      title: "Create Success Story",
      description: "With access to online learning resources anyone can transform."
    }
  ]
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
      <Gallery aboutInfo={aboutInfo}/>
    </section>
  )
}

export default About