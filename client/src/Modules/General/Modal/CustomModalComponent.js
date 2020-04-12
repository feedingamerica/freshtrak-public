/**
 * Custom Modal Component || Can be used for Sign in template
 */
import React from 'react';
import '../../../Assets/scss/main.scss';
import SignInComponent from '../../SignIn/SignInComponent';
import {Modal, Button} from 'react-bootstrap'; 
import ModalHeader from 'react-bootstrap/ModalHeader';


const CustomModalComponent = (props) => {
  const signIn = props.signIn? props.signIn: false;
    return (
      <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
    
  </Modal.Header>
      {/* <ModalHeader>
      <button className="btn default-button ml-2 flex-grow-1" onClick={props.onHide}>X</button>
      </ModalHeader> */}
      <Modal.Body >
        
       { signIn && <SignInComponent submit={props.onHide}/>} 
      </Modal.Body>
      
    </Modal>

    )}

export default CustomModalComponent;