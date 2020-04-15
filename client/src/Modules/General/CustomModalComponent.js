/**
 * Custom Modal Component || Can be used for Sign in template
 */
import React from 'react';
import PropTypes from 'prop-types';

import SignInComponent from '../SignIn/SignInComponent';
import {Modal} from 'react-bootstrap';
// import '../../Assets/scss/main.scss';

const CustomModalComponent = (props) => {
  const signIn = props.signin || false;
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
    CustomModalComponent.propTypes={
      signin: PropTypes.string
    }

export default CustomModalComponent;