import React from 'react'
import styles from './Footer.module.css'
import strawberry from '../../assets/strawberry.jpg'
import heartImage from '../../assets/heart-image.png'
import socialImage from '../../assets/social-image.png'

export const Footer = () => {
  return (
    <footer className={styles['footer-container']}>
        <div className={styles['footer']}>
            <img  src={strawberry} alt="strawberry Cake"/>
        </div >
        <div className={styles['footer']}>
            <img  src={heartImage} alt="heart Image"/>
        </div>
        <div className={styles['footer']} >
            <img  src={socialImage} alt="Social media image Image"/>
        </div>
    </footer>
  )
}
