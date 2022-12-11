import { useEffect, useState } from 'react'
import './App.css'
import Background from './components/Background/Background'
import Board from './components/Board/Board'
import Finish from './components/Finish/Finish'
import Header from './components/Header/Header'
import Settings from './components/Settings/Settings'


function App() {
  const [gameOptions, setGameOptions] = useState(null)
  const [start , setStart] = useState(false)
  const [score,setScore] = useState(200)
  const [finish , setFinish] = useState(false)


  const playAgain = () => {
    setGameOptions(null)
    setFinish(false)
    setScore(200)
  }

  const startGame = (options) => {
    setGameOptions(options)
  }

  return (
    <div className="App">
      <Header start={start} score={score} finish={finish} />
      <Background/>
      {!gameOptions ? <Settings startGame={startGame} setStart={setStart} /> : <Board gameOptions={gameOptions} setStart={setStart} setScore={setScore} setFinish={setFinish}/>}
      {finish && <Finish setGameOptions={setGameOptions} playAgain={playAgain} /> }
    </div>
  )
}

export default App
