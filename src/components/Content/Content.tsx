import React from 'react'
import pinkCake from '../../assets/pink-cake.jpg'
import creamCake from '../../assets/cream-cake.jpg'
import whiteCake from '../../assets/white-cake.jpg'
import cupCake from '../../assets/cup-cake.jpg'
import holiday from '../../assets/holiday.jpg'
import cakeCake from '../../assets/cake-cake.jpg'
import pinkMacans from '../../assets/pink-macans.jpg'
import styles from './Content.module.css'
import { Text } from '../Text/Text'

export const Content = () => {
  return (
    <>
    <div className={styles['content']}>
      
        <img className={styles['cake-image']} src={pinkCake} alt="Pink Cake"/>
        <div className={styles['content-text']}>
        <Text variant='h1' className={styles['content-title']}>delight in</Text>  
        <Text variant='p'>PERTICU IN FUERY BITE!</Text> 
        <Text variant='span' className={styles['content-span']}>open now</Text> 
    
        </div>   
    </div>

    <div className={styles['content2']}>
       <Text variant='h1' className={styles['content2-title']}>Delight in Every Bite!</Text>
      
      <div className={styles['card']}>
        <img  src={creamCake} alt="White Cake"/>
        <Text variant='h2'>Custom Cakes</Text>
           <Text variant='p' >
            classic butter cake but with Japanese techniques applied for the most plush, <br />
             soft and moist yellow cake like you’ve never had before. <br />
             This professional bakery style cake stays fresh and moist for 4 days — <br />
             that’s unheard of! Use the same batter for perfect Vanilla Cupcakes. 
           </Text>
        <button className={styles['content-button']}>Order Now</button>
        </div>

        <div className={styles['card']}>
          <img  src={whiteCake} alt="White Cake"/>
          <Text variant='h2'>Macaroins</Text>
          <Text variant='p'>
             This vanilla strawberry cake is going to be your new go-to birthday cake! <br />
            It has soft and fluffy vanilla cake layers sandwiched with a homemade strawberry filling. <br />
            It’s then frosted with strawberry buttercream that’s naturally pink! This vanilla cake with fresh <br />
            strawberry filling is perfect all spring and summer long 
          </Text>
          <button className={styles['content-button']}>Order Now</button>
        </div>


        <div className={styles['card']}>
            <img src={cupCake} alt="White Cake"/>
            <Text variant='h2'>Cupcakes collection</Text>
             <Text variant='p'>
               News flash: it's a new, limited edition flavour! <br />
               A delicious strawberry buttercream filling, sandwiched between two perfectly <br />
               baked lilac shells & decorated with sprinkles in the shape of a heart.
             </Text>
            <button className={styles['content-button']}>Order Now</button>
        </div>

        </div>

        <div className={styles['content3']}>
          <img src={holiday} alt="Holiday sale image"/>
          <img src={cakeCake} alt="Biscuits" />
          <img src={pinkMacans} alt=" Pink cake"/>
        </div>
        
        
    
    </>

  
  )
}
