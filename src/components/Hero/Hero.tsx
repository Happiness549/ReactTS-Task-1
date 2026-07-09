
import { Text } from '../Text/Text'
import styles from './Hero.module.css'
import cake from '../../assets/cake.jpg'
import Button from '../Button/Button'

export const Hero = () => {
  return (
    <>
    <div className={styles['hero']}>
        <img className={styles['cake-image']} src={cake} alt="Pink Cake"/>
        <div className={styles['hero-text']}>
          <Text variant='h1'>Delight in</Text>  
          <Text variant='p'>PERTICU IN FUERY BITE!</Text> 
          <Button  className={styles['hero-button']} text={'Open Now'} />
        </div>      
    </div>
    
    </>
  )
}
