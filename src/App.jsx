import { useEffect, useState } from 'react'
import './App.css'
import Background from './components/Background/Background'
import Board from './components/Board/Board'
import Settings from './components/Settings/Settings'


function App() {
  const [gameOptions, setGameOptions] = useState(null)

  const startGame = (options) => {
    setGameOptions(options)
  }

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <Background/>
      {!gameOptions ? <Settings startGame={startGame}/> : <Board gameOptions={gameOptions}/>}
    </div>
  )
}

export default App
