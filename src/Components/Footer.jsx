import React from 'react'
import logoDh from "/images/DH.png?url";
import facebook from "/images/ico-facebook.png?url";
import ig from "/images/ico-instagram.png?url";
import tiktok from "/images/ico-tiktok.png?url";
import wtspp from "/images/ico-whatsapp.png?url";
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer_div}>
        <p>Powered by</p>
        <img src={logoDh} alt='DH-logo' />
      </div>
      <div>
        <img className="icon" src={facebook} alt="facebook" />
        <img className="icon" src={ig} alt="ig" />
        <img className="icon" src={tiktok} alt="tiktok" />
        <img className="icon" src={wtspp} alt="wtspp" />
      </div>
        

    </footer>
  )
}

export default Footer