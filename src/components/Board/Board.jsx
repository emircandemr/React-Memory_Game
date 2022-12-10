import React, { useState } from 'react'
import "./Board.scss"
import useGetImages from  "../../hooks/useGetImages.jsx"
import { useEffect } from 'react'
import Loading from '../Loader/Loading'
import useGameLogic from "../../hooks/useGameLogic.jsx"
import Card from '../Card/Card'

const Board = ({gameOptions}) => {

    const images = useGetImages(gameOptions)
    const {cards , onCardClick} = useGameLogic(images)
    
    const [isLoading , setLoading] = useState(true)

    useEffect( () => {
        if(images.length > 0) setLoading(false)
    }, [images])


  return (
    <div className='board'>
      {isLoading && <Loading/>}
      {!isLoading &&  
          cards.map( (card) => (
            <Card key={card.uniqueId} card={card} onCardClick={onCardClick} />
          ))
      }
    </div>
  )
}

export default Board