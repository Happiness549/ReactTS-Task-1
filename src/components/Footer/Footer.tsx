import React from 'react'
import styles from './Footer.module.css'
import strawberry from '../../assets/strawberry.jpg'
import heartImage from '../../assets/heart-image.png'
import socialImage from '../../assets/social-image.png'
import facebook from '../../assets/facebook.png'
import pinterest from '../../assets/pinterest.png'
import tikTok from '../../assets/tik-tok.png'
import { Text } from '../Text/Text'

export const Footer = () => {
  return (
    <footer className={styles['footer-container']}>
        <div className={styles['footer']}>
            <img  src={strawberry} alt="strawberry Cake"/>
        </div >
        <div className={styles['footer']}>
            <img  src={heartImage} alt="heart Image"/>
        </div>
        
        <div className={styles['footer-image']}>
            <Text variant='h4'> Follow us on social media</Text>
            <img  src={facebook} alt="Facebook icon" className={styles['footer-img']}/>
             <img  src={tikTok} alt="tikTok icon" className={styles['footer-img']}/>
              <img  src={pinterest} alt="Pinterest icon" className={styles['footer-img']}/>
            <Text variant='h'> copyright reserved © 2016</Text>
        </div>
    </footer>
  )
}
