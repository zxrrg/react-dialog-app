import React, { useCallback, useEffect, useState } from "react";

const ModalContext = React.createContext();

const Modal = ({ modal, unSetModal }) => {

  useEffect(() => {
    //Creamos un time out para que se cierre el pop up tras 3 segundos
    setTimeout(() => unSetModal(), 3000)
  }, [modal, unSetModal]);

  //Montamos el modal de tal manera que, si usuario pulsa fuera, este se cierre
  return (
    <div className="modal">
      <button className="modal__close" onClick={unSetModal} />
      <div className="modal__inner">{modal}</div>
    </div>
  );
};

const ModalProvider = (props) => {
  const [modal, setModal] = useState();
  const unSetModal = useCallback(() => {
    setModal();
  }, [setModal]);

  return (
    <ModalContext.Provider value={{ unSetModal, setModal }} {...props}>
      {props.children}
      {modal && <Modal modal={modal} unSetModal={unSetModal} />}
    </ModalContext.Provider>
  );
};

const useModal = () => {
  const context = React.useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal ERROR provider");
  }

  return context;
};

export { ModalProvider, useModal };
