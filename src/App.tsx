


import './App.css'

import {  useModal } from './components/boardContext'
import Square from './components/square'
import { Modal } from './components/Modal'





function App() {
  
  const modalContext = useModal()
  return (
    <>
       
        <Square />

      
      <Modal ref={modalContext.modalRef} />
    </>

  )
}

export default App
