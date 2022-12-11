import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import useGameLogic from '../../hooks/useGameLogic'
import './Header.scss'


const Header = ({start,score,finish}) => {
    
    const [minute, setMinute] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [milliseconds, setMilliseconds] = useState(0)

    const stopwatch = () => {
        setTimeout(() => {
            setMilliseconds(milliseconds + 1)
        }, 10)
        if(milliseconds === 100) {
            setSeconds(seconds + 1)
            setMilliseconds(0)
        }
        if(seconds === 60) {
            setMinute(minute + 1)
            setSeconds(0)
        }
    }

    useEffect(() => {
        if(start) stopwatch()
        if(finish) {
            setMinute(0)
            setSeconds(0)
            setMilliseconds(0)
        }
    })

  return (
    <div className='header'>
        <div className='header__timer'>
            {minute}:{seconds}:{milliseconds}
        </div>
        <div className='header__title'>
           Memory Game
        </div>
        <div className='header__score'>
            {score}
        </div>

    </div>
  )
}

export default Header