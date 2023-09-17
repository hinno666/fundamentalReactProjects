import ModalImage from '@/assets/rock-lee.jpg'
import { useGlobalContext } from '../Context/context'
import { FaTimes } from 'react-icons/fa'

import './Modal.css'

export const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext()

  return (
    <div className={`modal-overlay ${isModalOpen ? "show-modal" : ""}`} onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-title">wassup</div>
        <img src={ModalImage} alt="rock-lee" className="modal-img" />
        <button className="close-modal" onClick={closeModal}><FaTimes /></button>
      </div>
    </div>
  )
}
