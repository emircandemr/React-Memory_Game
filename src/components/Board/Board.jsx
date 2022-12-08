import React, { useState } from 'react'
import "./Board.scss"
import useGetImages from  "../../hooks/useGetImages.jsx"
import { useEffect } from 'react'
import Loading from '../Loader/Loading'
import useGameLogic from "../../hooks/useGameLogic.jsx"

const Board = ({gameOptions}) => {

    const images = useGetImages(gameOptions)
    const cards = useGameLogic(images)

    const [isLoading , setLoading] = useState(true)

    useEffect( () => {
        if(images.length > 0) setLoading(false)
    }, [images])


  return (
    <div>
        {isLoading ? <Loading/> : <h1>Game is on</h1>}
    </div>
  )
}

export default Board