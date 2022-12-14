import React from 'react'
import styles from './Footer.module.css'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaPinterest } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
      <div className={styles.logo_footer}>
        <h3>superllex</h3>
        <p>Optix seamlessly connects your members with the community resources</p>
        <div className={styles.social}>
        <a href=""><FaFacebookF className={styles.icons} /></a>
        <a href=""><FaTwitter className={styles.icons} /></a>
        <a href=""><FaLinkedinIn className={styles.icons} /></a>
        <a href=""><FaPinterest  className={styles.icons} /></a>
        </div>
      </div>
      <div className={styles.entity_footer}>
        <h4>Entity types</h4>
        <ul>
          <li><a href='/'>Knowledge base</a></li>
          <li><a href='/'>Security</a></li>
          <li><a href='/'>Privacy Policy</a></li>
          <li><a href='/'>Partners</a></li>
          <li><a href='/'>About Us</a></li>
          <li><a href='/'>FAQs</a></li>
        </ul>
      </div>
      <div className={styles.services_footer}>
      <h4>Services</h4>
        <ul>
          <li><a href='/'>Contact Us</a></li>
          <li><a href='/'>Press</a></li>
          <li><a href='/'>Payrool</a></li>
          <li><a href='/'>Library</a></li>
          <li><a href='/'>Blog</a></li>
          <li><a href='/'>Help Center</a></li>
        </ul>
      </div>
      <div className={styles.resources_footer}>
      <h4>Resources</h4>
        <ul>
          <li><a href='/'>Pricing</a></li>
          <li><a href='/'>FAQs</a></li>
          <li><a href='/'>Contact Support</a></li>
          <li><a href='/'>Private Policy</a></li>
          <li><a href='/'>Terms</a></li>
        </ul>
      </div>
      <div className={styles.support_footer}>
      <h4>Support</h4>
        <ul>
          <li><a href='/'>Contact</a></li>
          <li><a href='/'>Affiliates</a></li>
          <li><a href='/'>Sitemap</a></li>
          <li><a href='/'>Cancelation Policy</a></li>
          <li><a href='/'>Pricing</a></li>
        </ul>
      </div>
    </div>
    </footer>
  )
}

export default Footer