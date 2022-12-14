import React from 'react'
import styles from './Gallery.module.css'
import Rectangle1 from '../../images/Rectangle1.png'
import Rectangle2 from '../../images/Rectangle2.png'
import Rectangle3 from '../../images/Rectangle3.png'
import Rectangle4 from '../../images/Rectangle4.png'

const Gallery = ({aboutInfo}) => {
  return (
        <section className={styles.section_gallery}>
          <div className={styles.gallery_info}>
          {aboutInfo.map(about => (
              <div className={styles.gallery_content} key={about.id}>
                  <h2>{about.id}.</h2>
                  <h4>{about.title}</h4>
                  <p>{about.description}</p>
              </div>
          ))}
          </div>
          <div className={styles.gallery_images}>
              <div className={styles.image_1}>
                  <img src={Rectangle1} alt="" />
                  <img src={Rectangle2} alt="" />
              </div>
              <div className={styles.image_2}>
                <img src={Rectangle3} alt="" />
                <img src={Rectangle4} alt="" />
              </div>
          </div>
        </section>
  )
}

export default Gallery