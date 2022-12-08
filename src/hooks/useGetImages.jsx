import React, { useEffect, useState } from 'react'

const getRandomPage = () => Math.round(Math.random() * (10-1) +1 )

const useGetImages = (gameOptions) => {
    const [images, setImages] = useState([])
    
    const buildURL = () => {
        let url = new URL ("https://api.pexels.com/v1/search")
        console.log({gameOptions})
        url.search = new URLSearchParams({
          query: gameOptions.category,
          orientation : "square",
          size : "small",
          per_page : gameOptions.cardsCount / 2,
          page : getRandomPage()
        })
    
        return url
    
      }
    
      const fetchPics = async () => {
    
          await fetch(buildURL(), {
            headers : {
              Authorization : "563492ad6f91700001000001dbe5a78ed93f4bc28a6d421f406e16a9"
            }
          })
          .then(data => data.json())
          .then(data => setImages(data.photos))
    
      }
    
      useEffect(() => {
        if(!gameOptions) return
        fetchPics()
      },[gameOptions])

      return images

}

export default useGetImages