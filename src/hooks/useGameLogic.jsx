import { useEffect } from "react"
import { getFormedData, getPairedPics } from "../utils"

const useGameLogic = (images) => {

    
    const prepareCards = () => {
        console.log(images)
        const a = getFormedData(images)
        const b = getPairedPics(a)
        console.log(b);
    }
    
    useEffect(() => {
        if(images.length > 0) prepareCards()
    }, [images])

}

export default useGameLogic