import React from 'react'
import styles from './Menu.module.css'

const Menu = ({menuItems}) => {
  return (
    <section className={styles.container}>
      <div className={styles.product_items}>
        {menuItems.map((menuItem) => {
          const {id, title, price, pastPrice, image, cart} = menuItem
          return <div className={styles.product_item} key={id}>
            <div className={styles.cart}><img src={cart} alt={title} /></div>
            <h4>{title}</h4>
            <span>{price}</span>
            <span>{pastPrice}</span>
            <div className={styles.product}>
              <img src={image} alt={title} />
            </div>
          </div>
        })}
      </div>
    </section>
  )
}

export default Menu