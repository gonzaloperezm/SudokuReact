

import './App.css'
import {Board} from './components/board'
import { BoardContext } from './components/boardContext'



function App() {
  

  return (
    <BoardContext>
     <Board />
    </BoardContext>
  )
}

export default App
