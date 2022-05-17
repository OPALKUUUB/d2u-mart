import React, { createContext, useState } from "react";
import { LoginModal } from "../component/Modal/LoginModal";

export const WebContext = createContext();
export const WebProvider = ({ children }) => {
  const [loginModal, setLoginModal] = useState(false);
  const handleLoginModal = (set = false) => {
    if (set) {
      setLoginModal(false);
    } else {
      setLoginModal(!loginModal);
    }
  };
  return (
    <WebContext.Provider value={{ handleLoginModal: handleLoginModal }}>
      {children}
      {loginModal && <LoginModal onHide={handleLoginModal} />}
    </WebContext.Provider>
  );
};
