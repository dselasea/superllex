import React from 'react'
import styles from './Clients.module.css'
import Profile from '../../images/Client.png'
import Logo from '../../images/Logo.png'
import RightArrow from '../../images/rightIcon.png'
import LeftArrow from '../../images/leftIcon.png'

const Clients = () => {
  return (
    <section className={styles.container}>
        <div className={styles.client_say}>
          <h2>What our happy clients say</h2>
          <p>File storage made easy-including powerful features you won't find anywhere else. Whether you're.</p>
        </div>
        <div className={styles.client_profile}>
          <div>
          <img src={Profile} alt="" />
          </div>
          <div>
            <img src={Logo} alt="" />
            <p>File storage made easy-including powerful features you won't find anywhere else. Whether You're</p>
            <h4>Larry Diamond</h4>
            <h5>Chief Executive Officer</h5>
            <div className={styles.arrow}>
              <div><img src={LeftArrow} alt="" /></div>
              <div><img src={RightArrow} alt="" /></div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Clients