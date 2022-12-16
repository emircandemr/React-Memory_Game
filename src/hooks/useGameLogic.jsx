import { useEffect, useState } from "react"
import { addUniqueIds, getFormedData, getPairedPics, shuffleCards } from "../utils"


const paces = {
    easy : 1500,
    medium : 1000,
    hard : 500,
    professional : 250
}

const useGameLogic = (images,gameOptions,setScore,setFinish,setStart) => {
    const [cards,setCards] = useState([])
    const [visibleCards, setVisibleCards] = useState([])

    const prepareCards = () => {
        const a = getFormedData(images)
        const b = getPairedPics(a)
        const c = addUniqueIds(b)
        const d = shuffleCards(c)
        setCards(d)
    }

    const flipCard = (id) => {
        const newCards = cards.map( (card) => {
            if(card.uniqueId === id) {
                card.isShown = true
            }
            if(card.isShown) setVisibleCards(oldState => [...oldState, card.uniqueId])
            return card
        })
        setCards(newCards)
    }

    const onCardClick = (id) => {
        if(visibleCards.length < 2) {
            flipCard(id)
        }
    }

    const checkMatch = () => {

        const visibleCardsData = cards.filter((card) => visibleCards.indexOf(card.uniqueId) !== -1)

        const matched = visibleCardsData[0]?.id === visibleCardsData[1]?.id
        
        if(visibleCards.length >= 2) {
            const updatedCards = cards.map((card) =>{
                if(visibleCards.indexOf(card.uniqueId) !== -1) {
                    card.isShown = false
                    card.isFound = matched
                }
                return card
    
            })
            setTimeout(( ) => {
                setCards(updatedCards)
                setVisibleCards([]) 
                if(matched) setScore(oldState => oldState + 50)
                if(!matched) setScore(oldState => oldState - 10)
                if(updatedCards.every((card) => card.isFound)) {
                    setFinish(true)
                    setStart(false)
                }

            },paces[gameOptions.pace])

    }
    }

    useEffect(() => {
        if(images.length > 0) prepareCards()
    }, [images])

    useEffect(( )=> {   
        checkMatch()
    }, [visibleCards])

    return {cards, onCardClick}
}

export default useGameLogic