import React from 'react'
import './Finish.scss'


const Finish = ({setGameOptions,playAgain}) => {

    const playAgainHandler = () => {
        playAgain()
    }

  return (
    <div className='finish'>
        <div className='finish__layer'></div>
        <div className='finish__content'>
            <h1 className='finish__title'>Congratulations!</h1>
            <div className='finish__button'>
            <button className='finish__button--btn' onClick={playAgainHandler}>Play again</button>
            </div>
        </div>
    </div>
  )
}

export default Finish