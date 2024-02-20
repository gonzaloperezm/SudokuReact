

import { useRef } from 'react'
import './App.css'

import { BoardContext, ModalRef } from './components/boardContext'
import Square from './components/square'
import { Modal } from './components/Modal'

const row1 = [5, 3, null, null, 7, null, null, null, null]
const row2 = [6, null, null, 1, 9, 5, null, null, null]
const row3 = [null, 9, 8, null, null, null, null, 6, null]
const row4 = [8, null, null, null, 6, null, null, null, 3]
const row5 = [4, null, null, 8, null, 3, null, null, 1]
const row6 = [7, null, null, null, 2, null, null, null, 6]
const row7 = [null, 6, null, null, null, null, 2, 8, null]
const row8 = [null, null, null, 4, 1, 9, null, null, 5]
const row9 = [null, null, null, null, 8, null, null, 7, 9]

export const contenido = [row1, row2, row3, row4, row5, row6, row7, row8, row9]

function App() {
  const RefModal = useRef<ModalRef>()
  const openModal=()=> {
    if (RefModal.current != null) {
      RefModal.current.showModal()
    }
  }

  return (
    <>
      <BoardContext openModal={openModal} contenido={contenido}>
        <Square />

      </BoardContext>
      <Modal ref={RefModal} />
    </>

  )
}

export default App
