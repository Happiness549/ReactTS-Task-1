import React from 'react'
import pinkCake from '../Images/pink-cake.jpg'
import styles from './Content.module.css'

export const Content = () => {
  return (
    <div>
        <img className={styles['cake-image']} src={pinkCake} alt="Pink Cake" />
    </div>
  )
}
