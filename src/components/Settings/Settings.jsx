import React, { useState } from 'react'
import "./Settings.scss"
import RadioBox from '../RadioBox/RadioBox';
import { CATEGORIES } from "../../constant.js";
import { DIFFICULTY } from "../../constant.js";
import { INITIAL_CARDS_COUNT } from "../../constant.js";
import Counter from '../Counter/Counter';



const Settings = ({startGame}) => {

  const [category, setCategory] = useState(CATEGORIES[1])
  const [pace, setPace] = useState(DIFFICULTY[2])
  const [cardCount, setcardCount] = useState(INITIAL_CARDS_COUNT[0])
  const [cardsCount, setcardsCount] = useState(8)


  const onClickStartGame = () => {
    startGame({category, pace, cardsCount, cardCount})
  }

  return (
    <div className='settings' >
        <h2 className='settings__title' >Settings</h2>
        <div className='settings__category__options'>
          {CATEGORIES.map((name,index) => (
              <RadioBox key={index} name={name} selectedItem={category} onChange={(e) => {setCategory(e.target.value)}} />
        ))} 
        </div>
        <div className='settings__category__options'>
          {DIFFICULTY.map((name,index) => (
                <RadioBox key={index} name={name} selectedItem={pace} onChange={(e) => {setPace(e.target.value)}} />
          ))}         
        </div>
        <div className='settings__category__options'>
          {INITIAL_CARDS_COUNT.map((name,index) => (
                <RadioBox key={index} name={name} selectedItem={cardCount} onChange={(e) => {setcardCount(e.target.value)}} />
          ))}         
        </div>
        <div className='settings__category__options'>
            <Counter cardsCount={cardsCount} setcardsCount={setcardsCount}/>
        </div>
        <div className='settings__button'>
          <button className='settings__button-btn' onClick={onClickStartGame} >Start</button>
        </div>

    </div>
  )
}

export default Settings