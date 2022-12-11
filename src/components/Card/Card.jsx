import React from 'react'
import Image from '../Image/Image'
import "./Card.scss"

const Card = ({card,onCardClick}) => {

    const onClick = () => {
      if(card.isFound || card.isShown) return
        onCardClick(card.uniqueId)
    }

  return (
    <div className='board__container' onClick={onClick} >
    <div className={`board__card  ${card.isShown ? 'flipped' : ' '} `}  >
            <div className={`board__card-front  ${card.isFound ? 'found' : ' '} `} ></div>
            <div className="board__card-back" >
                <Image url={card.url}/>
            </div>
        </div>
    </div>
  )
}

export default Card