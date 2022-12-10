import React from 'react'
import Image from '../Image/Image'
import "./Card.scss"

const Card = ({card,onCardClick}) => {

    const onClick = () => {
        onCardClick(card.uniqueId)
    }

  return (
    <div className='board__container' onClick={onClick} >
    <div className="board__card" >
            <div className="board__card-front" ></div>
            <div className="board__card-back" >
                <Image url={card.url}/>
            </div>
        </div>
    </div>
  )
}

export default Card