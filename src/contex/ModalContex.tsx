import { createContext, useState } from 'react';

interface IModalContex {
  modal: boolean;
  open: () => void;
  close: () => void;
}

export const ModalContex = createContext<IModalContex>({
  modal: false,
  open: () => {
  },
  close: () => {
  }
});
export const ModalState = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = useState(false);

  const open = () => setModal(true);
  const close = () => setModal(false);

  return (
    <ModalContex.Provider value={{ modal,  open, close }}>
      {children}
    </ModalContex.Provider>
  );
};

