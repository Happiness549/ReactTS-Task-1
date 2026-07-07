
import React from 'react'

interface Props  {
    text: string | number;
    style?: React.CSSProperties;
}

export const Button: React.FC<Props> = ({ text, style }) => {
  return (
    <div>
    <button style={style}>
      {text}
    </button>
    </div>
  )
}
 