import React, { useState } from 'react'
import "./Settings.scss"
import RadioBox from '../RadioBox/RadioBox';
import { CATEGORIES } from "../../constant.js";
import { DIFFICULTY } from "../../constant.js";
import { INITIAL_CARDS_COUNT } from "../../constant.js";
import Footer from '../Footer/Footer';



const Settings = ({startGame,setStart}) => {

  const [category, setCategory] = useState(CATEGORIES[0])
  const [pace, setPace] = useState(DIFFICULTY[2])
  const [cardCount, setcardCount] = useState(INITIAL_CARDS_COUNT[2])


  const onClickStartGame = () => {
    startGame({category, pace, cardCount})
    setStart(true)
  }

  return (
    <>
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
        <div className='settings__button'>
          <button className='settings__button--btn' onClick={onClickStartGame} >Start</button>
        </div>
    </div>
     <Footer/>
    </>
  )
}

export default Settings