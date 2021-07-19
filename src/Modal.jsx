import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ message, isOpen, onClose }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div>
      <h2>{message}</h2>
      <button className="close" onClick={onClose}>
        Close
      </button>
    </div>,
    document.body
  );
};

export default Modal;
