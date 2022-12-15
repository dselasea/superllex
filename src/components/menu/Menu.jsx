import React from 'react'
import styles from './Menu.module.css'

const Menu = ({ items }) => {
  return (
    <section className={styles.container}>
      <div className={styles.product_items}>
        {items.map((menuItem) => {
          const {id, title, price, pastPrice, img, cart} = menuItem
          return <div className={styles.product_item} key={id}>
              <img src={cart} alt={title} className={styles.cart} />
            <h4>{title}</h4>
              <div className={styles.price}>
              <span>{`$${price}`}</span>
              <span className={styles.small}><del>{`$${pastPrice}`}</del></span>
            </div>
              <img src={img} alt={title} className={styles.product}/>
          </div>
        })}
      </div>
    </section>
  )
}

export default Menu