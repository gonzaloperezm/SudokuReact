

import { useRef } from 'react'
import './App.css'

import { BoardContext, ModalRef } from './components/boardContext'
import Square from './components/square'
import { Modal } from './components/Modal'



function App() {
  const RefModal = useRef<ModalRef>()
  const openModal=()=> {
    if (RefModal.current != null) {
      RefModal.current.showModal()
    }
  }

  return (
    <>
      <BoardContext openModal={openModal}>
        <Square />

      </BoardContext>
      <Modal ref={RefModal} />
    </>

  )
}

export default App
