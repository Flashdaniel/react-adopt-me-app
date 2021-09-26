import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
  const eref = useRef(null);

  if (!eref.current) {
    eref.current = document.createElement("div");
  }

  useEffect(() => {
    modalRoot.appendChild(eref.current);
    return () => {
      modalRoot.removeChild(eref.current);
    };
  }, []);

  return createPortal(<div>{children}</div>, eref.current);
};

export default Modal;
