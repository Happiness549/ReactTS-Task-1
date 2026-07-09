import React from 'react'
import styles from './Itemcard.module.css'

interface ItemCardProps{
    imageUrl: string;
    altText: string;
    style?: React.CSSProperties;
    className?: string; 

}


export const ItemCard:React.FC<ItemCardProps> = ({imageUrl, altText, style, className}) => {
  return (
    <>
    <img 
    src={imageUrl}
    alt={altText}
    />

    </>
  )
}

