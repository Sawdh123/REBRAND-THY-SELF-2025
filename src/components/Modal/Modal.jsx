import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import { Link } from "react-router-dom";

const Modal = ({ closeModal }) => {
  return ReactDOM.createPortal(
    <div onClick={closeModal} className='modal-overlay'>
      <div onClick={(e) => e.stopPropagation()} className='modal-container'>
        <div className='upper-section'>
          <h1>Hey Recruiter, Ready to Defy the Ordinary?</h1>
          <p onClick={closeModal} className='close'>&times;</p>
        </div>
        <div className='middle-section'>
          <h3>"The impediment to action advances action. What stands in the way becomes the way."</h3>
          <p>
            Marcus Aurelius knew that challenges aren't roadblocks—they're opportunities in disguise.
            If you're looking for a driven, innovative team member who turns obstacles into achievements,
            let's make it happen!
          </p>
        </div>
        <div className='lower-section'>
         
          <Link className="modal-btn btn-contact" to="/contact">
            Let's Connect!
          </Link>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
