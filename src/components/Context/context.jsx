import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return <AppContext.Provider value={{ isModalOpen, openModal, closeModal }}>
    {children}
  </AppContext.Provider>
}


export const useGlobalContext = () => useContext(AppContext)

AppProvider.propTypes = {
  children: PropTypes.element
}
