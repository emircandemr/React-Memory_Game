import React from 'react'
import "./Counter.scss"

const Counter = ({cardsCount,setcardsCount}) => {

    const onIncrement = () => {
        const number = cardsCount + 2;
        if(number <= 40){
            setcardsCount(number)

        }
    }

    const onDecrement = () => {
        const number = cardsCount - 2;
        if(number >= 2){
            setcardsCount(number)
        }

    }
    

  return (
    <div className='quantity'>
        <button className='quantity__minus' title='Decrement' onClick={onDecrement} ><span>-</span></button>
        <span className='quantity__text' >{cardsCount}</span>
        <button className='quantity__plus' title='Increment' onClick={onIncrement} ><span>+</span></button>
    </div>
  )
}

export default Counter