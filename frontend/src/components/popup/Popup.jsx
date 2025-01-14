import { useState } from "react";
import { createPortal } from "react-dom";

import BackDrop from "./BackDrop";

import "./Popup.css";

const Popup = (props) => {
  const { Modal, closeModal } = props;

  const [closeAnimation, setCloseAnimation] = useState(false);

  const closeModalWithAnimation = () => {
    setCloseAnimation(true);

    setTimeout(() => {
      closeModal();
    }, 200);
  };

  const popupElement = (
    <div className="z-20 fixed top-0 left-0 h-screen w-full">
      <BackDrop onClick={closeModalWithAnimation} />

      <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <Modal
          closeModal={closeModalWithAnimation}
          className={` ${
            closeAnimation ? "close-modal" : "open-modal"
          } bg-gray-900  rounded-lg`}
        />
      </div>
    </div>
  );

  return createPortal(popupElement, document.getElementById("popup"));
};

export default Popup;
