import '../styles/Modal.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { forwardRef,  useImperativeHandle, useState } from "react";
import Confetti from 'react-confetti';



export const Modal = forwardRef((props,ref) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

   
    console.log(props)
    useImperativeHandle(ref, () => ({
        showModal() {
          handleShow();
        },
        hideModal() {
          handleClose();
        },
      }))
    return show ?
        
        <div>
          <Confetti />
              <div className="modal-overlay">
      <div className="modal-base d-flex flex-column bg-white">
        <div className='modal-header text-white bg-secondary p-3'>
          <span>Felicitaciones</span>
        </div>
        <div className='modal-body p-3'>
        
          <div>
            ¡Has ganado!
            
          </div>
        
        </div>
        <div className="modal-actions d-flex justify-content-end p-3 pt-0">
          <button className="btn btn-primary text-white" onClick={() => {  handleClose(); }}>
            Close
          </button>
        </div>
      </div>
    </div>
            
        </div>: null

})