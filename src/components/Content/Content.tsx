import React from 'react'
import pinkCake from '../Images/pink-cake.jpg'
import creamCake from '../Images/cream-cake.jpg'
import whiteCake from '../Images/white-cake.jpg'
import cupCake from '../Images/cup-cake.jpg'
import styles from './Content.module.css'

export const Content = () => {
  return (
    <>
    <div className={styles['content']}>
      
        <img className={styles['cake-image']} src={pinkCake} alt="Pink Cake"/>
        <div className={styles['content-text']}>
        <h1 className={styles['content-title']}>Delight in </h1>
        <p className={styles['content-description']}>PERTICU IN FUERY BITE!</p>
        <button className={styles['content-button']}>Open Now</button>
        </div>   
    </div>

    <div className={styles['content2']}>
      <h1 className={styles['content2-title']}>Delight in Every Bite</h1>
      <div/>
        
        
      <div className={styles['card']}>
        <img  src={creamCake} alt="White Cake"/>
        <h3>Custom Cakes</h3>
        <p>
            classic butter cake but with Japanese techniques applied for the most plush, <br />
             soft and moist yellow cake like you’ve never had before. <br />
             This professional bakery style cake stays fresh and moist for 4 days — <br />
             that’s unheard of! Use the same batter for perfect Vanilla Cupcakes. 
        </p>
        <button className={styles['content-button']}>Order Now</button>
        </div>

        <div className={styles['card']}>
          <img  src={whiteCake} alt="White Cake"/>
          <h3>Macarons</h3>
          <p> 
            This vanilla strawberry cake is going to be your new go-to birthday cake! <br />
            It has soft and fluffy vanilla cake layers sandwiched with a homemade strawberry filling. <br />
            It’s then frosted with strawberry buttercream that’s naturally pink! This vanilla cake with fresh <br />
            strawberry filling is perfect all spring and summer long 
          </p>
           <button className={styles['content-button']}>Order Now</button>
        </div>


        <div className={styles['card']}>
            <img src={cupCake} alt="White Cake"/>
            <h3>Cupcakes collection</h3>
            <p>
              News flash: it's a new, limited edition flavour! <br />
             A delicious strawberry buttercream filling, sandwiched between two perfectly <br />
             baked lilac shells & decorated with sprinkles in the shape of a heart.
            </p>
            <button className={styles['content-button']}>Order Now</button>
        </div>


        </div>
        
    
    </>

  
  )
}
