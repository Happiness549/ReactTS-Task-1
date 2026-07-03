import React from 'react'

type Props = {
    variant?: String,
    children?: React.ReactNode,
    style?: React.CSSProperties
}

export const Text: React.FC<Props> = ({variant, children, style}) => {
  if(variant === 'span') return <span style={style}>{children}</span>
  if(variant === 'span') return <span style={style}>{children}</span>
  
    return (
    <div style={style}>{children}</div>
  )
}


