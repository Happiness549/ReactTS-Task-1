import React from 'react'

interface ItemCardContentProps{
    text: string;
    style?: React.CSSProperties;
    className?: string; 
}

export const ItemCardContent: React.FC<ItemCardContentProps> = ({text, style, className}) => {
  return (
    <div style={style} className={className}>
        <section>
            {text}
        </section>
    </div>
  )
}

