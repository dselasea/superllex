import React from 'react'
import styles from './Hotdeals.module.css'
import Fire from '../../images/fire.png'
import Cash from '../../images/cash.png'

const Hotdeals = () => {
  const services = [
    {
      id: 1,
      title: '1.5% cashback',
      description: "Online shopping for retail sales direct to consumers"
    },
    {
      id: 2,
      title: '30-day terms',
      description: "Online shopping for retail sales direct to consumers"
    },
    {
      id: 3,
      title: 'Save Money',
      description: "Online shopping for retail sales direct to consumers"
    },

  ]
  return (
    <div className={styles.container}>
        <section className={styles.section}>
      <div className={styles.section_hot}>
        <h2>Hot <img src={Fire} alt="" />deals for you</h2>
        <p>Online shopping for retail sales direct to consumers</p>
      </div>
      <div className={styles.section_service}>
        {
          services.map(service => (
            <div key={service.id}>
              <img src={Cash} alt="" />
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))
        }
      </div>
    </section>
    </div>
  )
}

export default Hotdeals