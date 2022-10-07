import React from 'react';
import './Modal.css';

interface ModalProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void
}

export const Modal = ({ children, title, onClose }: ModalProps) => {
  return (
    <>
      <div className="modalBg" onClick={onClose} />
      <div className="w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2">
        <h1 className="title">{title}</h1>
        {children}
      </div>
    </>
  );
};

export default Modal;
