import creamCake from '../../assets/cream-cake.jpg'
import whiteCake from '../../assets/white-cake.jpg'
import cupCake from '../../assets/cup-cake.jpg'
import holiday from '../../assets/holiday.jpg'
import cakeCake from '../../assets/cake-cake.jpg'
import pinkMacans from '../../assets/pink-macans.jpg'
import styles from './Content.module.css'
import { Text } from '../Text/Text'
import Button from '../Button/Button'
import ImageCard from '../ImageCard/ImageCard'


export const Content = () => {
  return (
    <>
     
     

    <div className={styles['content2']}>
      <div className={styles['content2-title']}  >
        <Text variant='h1' >Delight in every Bite!</Text>
      </div>

      <div  className={styles['cards']}>
        
         <div className={styles['card']}>
          <ImageCard src={creamCake} alt="Creamy Cake" />
          <ImageCard src={whiteCake} alt="White Cake" />
          <ImageCard src={cupCake} alt="Cup Cake" />
         </div>
      </div>
         
    </div>

      <div className={styles['content2-text']}>

          <div className={styles['content2-text1']} >
           <Text variant='h2'>Custom Cakes</Text>
           <Text variant='p' >
            classic butter cake but with Japanese techniques applied 
             soft and moist <br /> yellow cake like  you’ve never. 
             
           </Text>
           <Button  className={styles['button']} text={'Order Now'}/>
          </div>

        <div className={styles['content2-text1']}>
         <Text variant='h2'>Macaroins</Text>
             <Text variant='p'>
               This vanilla strawberry cake is going to be <br /> your new go-to birthday cake! <br />
               It has soft and fluffy vanilla. 
              
            </Text>
             <Button  className={styles['button']} text={'Order Now'}/>
        </div>
          
          <div className={styles['content2-text1']}>
            <Text variant='h2'>Cupcakes collection</Text>
                <Text variant='p'>
                  News flash: it's a new, limited edition flavour! 
                  A delicious strawberry buttercream filling. 
             </Text>
              <Button  className={styles['buttonT']} text={'Order Now'}/>
            
          </div>

      </div>


        <div className={styles['content3']}>
          <div className={styles['content3-title']}>
            <Text variant='h1'>Custom Collection</Text> 
          </div>

          <div className={styles['content3-cards']}>
             <ImageCard src={holiday} alt="Holiday sale image" />
              <ImageCard src={cakeCake} alt="Biscuits" />
              <ImageCard src={pinkMacans} alt="Pink cake" />
          </div>
          
        </div>
    
    </>
  )
}
