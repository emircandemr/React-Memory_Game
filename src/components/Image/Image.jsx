import React from 'react'
import "./Image.scss"

const Image = ({url}) => {
  return (
    <div className='card__img'>
        <img className='img' src={url} width="200" />
    </div>
  )
}

export default Image