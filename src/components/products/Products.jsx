import React from 'react'
import styles from './Products.module.css'
import RightArrow from '../../images/Vector2.png'

const Products = ({ products, filterProducts}) => {
  return (
    <section className={styles.container}>
      <div className={styles.product_title}>
        <h2>Products</h2>
        <button onClick={() => filterProducts('all')}>See All <img src={RightArrow} alt="Right Arrow" /></button>
      </div>
      <div className={styles.product_buttons}>
          {products.map((product, index) => {
            return <button type='button' className={styles.button} key={index} onClick={() => filterProducts(product)}>
              {product}
            </button>
          })}
      </div>
    </section>
  )
}

export default Products