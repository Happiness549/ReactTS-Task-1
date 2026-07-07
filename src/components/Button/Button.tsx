
import React from 'react'

interface Props  {
    Text: string | number;
    style?: React.CSSProperties;
}

export const Button: React.FC<Props> = ({ Text, style }) => {
  return (
    <div>
    <button style={style}>
      {Text}
    </button>
    </div>
  )
}
 