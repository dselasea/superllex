import React from 'react'
import styles from './Companies.module.css'
import Microsoft from '../../images/Microsoft.png'
import Entrepreneur from '../../images/Entrepreneur.png'
import Fortune from '../../images/Fortune.png'
import Business from '../../images/Business web.png'
import Mashable from '../../images/Mashable.png'

const Companies = ({microsoft, entrepreneur, fortune, business, mashable}) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
      <h4>trusted by over 1k+ companies</h4>
      <div className={styles.section_brands}>
        <div>
        <img src={Microsoft} alt={microsoft} />
        </div>
        <div>
        <img src={Entrepreneur} alt={entrepreneur} />
        </div>
        <div>
        <img src={Fortune} alt={fortune} />
        </div>
        <div>
        <img src={Business} alt={business} />
        </div>
        <div>
        <img src={Mashable} alt={mashable} />
        </div>
      </div>
      </div>
    </section>
  )
}

export default Companies