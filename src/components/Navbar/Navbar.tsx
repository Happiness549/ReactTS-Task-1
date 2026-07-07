import React from 'react'
import styles from './Navbar.module.css'
import { Text } from '../Text/Text'
import {Button} from '../Button/Button'

export const Navbar = () => {
  return (
    <nav>
        <div className={styles.logo}>
            <Text variant='span' style={{margin: 0}}>Palieyerie</Text> 
            <div className={styles.links}>
               <a href="/#" className={styles.link}>Home</a>
               <a href="/#" className={styles.link}>Reen</a>
               <a href="/#" className={styles.link}>Cames</a>
               <a href="/#" className={styles.link}>Parties</a>
               <a href="/#" className={styles.link}>Contact</a>
               <div className={styles.contact}>
                <button className={styles.contact}>06868 8989 Now</button>
               </div>
            </div>

        </div>
    </nav>
  )
}
