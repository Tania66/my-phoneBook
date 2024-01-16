import React from 'react';
import Modal from 'react-modal';
import { HiOutlinePlus } from "react-icons/hi2";
import { FaWindowClose } from 'react-icons/fa';
import {ButtonClose, ButtonOpen } from './Modal.styled';
import ContactForm from 'components/ContactForm/ContactForm';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };


  Modal.setAppElement('#root');

const ModalAdd = () => {

const [modalIsOpen, setModalOpen] = React.useState(false);

function openModal() {
    setModalOpen(true);
  }

function closeModal(){
    setModalOpen(false);
}

    return(
     <div>
<ButtonOpen onClick={openModal} type='button'><HiOutlinePlus  size={30} color='#9cdfdf'/></ButtonOpen>
        <Modal
  style={customStyles}
  isOpen={modalIsOpen}
  contentLabel="Example Modal"
  onRequestClose={closeModal}
>  
<ButtonClose onClick={closeModal} type='button'>
<FaWindowClose size={30} color='#6E7FCF'/>
</ButtonClose>
<ContactForm closeModal={closeModal}/>
</Modal>
       </div>
    );
  }


  export default ModalAdd;
