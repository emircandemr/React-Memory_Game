import { useEffect, useState } from "react"
import { addUniqueIds, getFormedData, getPairedPics, shuffleCards } from "../utils"

const useGameLogic = (images) => {

    const [cards,setCards] = useState([])
    
    const prepareCards = () => {

        const a = getFormedData(images)
        const b = getPairedPics(a)
        const c = addUniqueIds(b)
        const d = shuffleCards(c)
        setCards(d)
        console.log(d)
    }

    const flipCard = (id) => {
        const newCards = cards.map( (card) => {
            if(card.uniqueId === id) {
                card.isShown = true
            }
            return card
        })
        setCards(newCards)
    }

    const onCardClick = (id) => {
        flipCard(id)
    }


    useEffect(() => {
        if(images.length > 0) prepareCards()
    }, [images])

    return {cards, onCardClick}
}

export default useGameLogic