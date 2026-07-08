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

       

        <div className={styles['icons']}>

            <div className={styles['footer-h1']}>
                <Text variant='h4' className={styles['footer-h1']}> Follow us on social media</Text>
            </div>

            <div className={styles['footer-icons']} style={{gap: '20px'}}>
              <img  src={facebook} alt="Facebook icon" className={styles['footer-icon']} style={{gap: '20px'}}/>
              <img  src={tikTok} alt="tikTok icon" className={styles['footer-icon']}/>
              <img  src={pinterest} alt="Pinterest icon" className={styles['footer-icon']}/>
            </div>
           
            <div>
              <Text variant='p'> copyright reserved © 2016</Text>
            </div>

        </div>
        
    </footer>
  )
}
