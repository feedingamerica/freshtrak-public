import React from 'react';
import userIcon from '../../Assets/img/Mask.svg';
import {NavDropdown} from 'react-bootstrap';

const LoggedInComponent = () => {	 
    return (
			<NavDropdown eventKey={1} title={                                    
				<img className="thumbnail-image" src={userIcon} alt="user pic" />
				}> 
				<NavDropdown.Item eventKey={1.1} href="/profile">Basil TJ</NavDropdown.Item> 
				<NavDropdown.Item eventKey={1.1} href="/profile">Profile</NavDropdown.Item> 
				<NavDropdown.Item divider /> 
				<NavDropdown.Item eventKey={1.3}> 
					<i className="fa fa-sign-out"></i> Logout 
				</NavDropdown.Item> 
			</NavDropdown>
    )
};
export default LoggedInComponent;