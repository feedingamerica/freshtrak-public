/**
 * Custom Modal Component || Can be used for Sign in template
 */
import React from 'react';
import '../../../Assets/scss/main.scss';
import SignInComponent from '../../SignIn/SignInComponent';
import {Modal, Button} from 'react-bootstrap'; 


const CustomModalComponent = (props) => {
  const signIn = props.signIn? props.signIn: false;
    return (
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body >
        
       { signIn && <SignInComponent submit={props.onHide}/>} 
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>

    )}

export default CustomModalComponent;