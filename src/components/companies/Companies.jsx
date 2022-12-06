import React from 'react'
import styles from './Companies.module.css'
import Microsoft from '../../images/Microsoft.png'
import Entrepreneur from '../../images/Entrepreneur.png'
import Fortune from '../../images/Fortune.png'
import Business from '../../images/Business web.png'
import Mashable from '../../images/Mashable.png'

const Companies = () => {
  return (
    <section className={styles.section}>
      <h3>trusted by over 1k+ companies</h3>
      <div className={styles.section_brands}>
        <div>
        <img src={Microsoft} alt="" />
        </div>
        <div>
        <img src={Entrepreneur} alt="" />
        </div>
        <div>
        <img src={Fortune} alt="" />
        </div>
        <div>
        <img src={Business} alt="" />
        </div>
        <div>
        <img src={Mashable} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Companies