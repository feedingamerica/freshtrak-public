/**
 * Created by Basil on 04/04/20.
 */

import React, { useEffect, useState } from 'react';

import mainLogo from '../../Assets/img/logo.png';
import navBarIcon from '../../Assets/img/menu.svg';
import userIcon from '../../Assets/img/Mask.svg';
import {Link} from "react-router-dom";
import {Nav,NavDropdown,Navbar,DropdownItem} from 'react-bootstrap';

const HeaderComponent = (props) => {
    const [navbarShrink, setNavbarShrink] = useState('');
    useEffect(() => {
        window.onscroll = () => {
          if(window.pageYOffset > 100){
            setNavbarShrink('navbar-shrink');
          } else {
            setNavbarShrink('');
          }
        }
    }, []);
    return (
    	 <nav className={`navbar navbar-expand-md navbar-light fixed-top ${navbarShrink} ${props.shortHeader}`} id="mainNav">
                <div className="container">
                    <div>
                        <h3 className="my-auto mobile-view">
                            <a className="navbar-brand ml-3 ml-sm-0" href="#">
                                <img src={mainLogo} alt="FreshTrak" className="d-inline-block" />
                            </a>
                        </h3>
                        <button className="navbar-toggler mr-2" type="button" data-toggle="collapse"
                            data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon">
                                <img src={navBarIcon} alt="UserLogo" className="img-fluid"/>
                            </span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse w-100 flex-md-column social-icons" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto small mt-3 mt-md-0 mb-2 mb-md-0 main-menu align-items-center">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">Find Resources</a>
                                <div className="dropdown-menu" aria-labelledby="dropdown01">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">For Food Banks</a>
                                <div className="dropdown-menu" aria-labelledby="dropdown01">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            
                        </ul>

                    </div>
                    <div className="user-avatar">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false"> <img src={userIcon} alt="user imge"/></a>
                                <div className="dropdown-menu" aria-labelledby="dropdown01">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                       
                    </div>
                </div>
            </nav>*/
            <Nav className={`navbar navbar-expand-md navbar-light fixed-top ${navbarShrink}`} id="mainNav">
                <div className="container">
                    <Navbar expand="md" >
                        <Navbar.Brand href="#home">                            
                                <h3 className="my-auto mobile-view">                                    
                                    <img src={mainLogo} alt="FreshTrak" className="d-inline-block" />                                    
                                </h3>
                                <button className="navbar-toggler mr-2" type="button" data-toggle="collapse"
                                    data-target="#navbarCollapse">
                                    <span className="navbar-toggler-icon">
                                        <img src={navBarIcon} alt="UserLogo" className="img-fluid"/>
                                    </span>
                                </button>
                            
                        </Navbar.Brand>        
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="navbarCollapse" className="justify-content-end">
                                <Nav className="navbar-nav ml-auto small mt-3 mt-md-0 mb-2 mb-md-0 main-menu align-items-center">
                                    <NavDropdown title="Find Resources" aria-labelledby="dropdown01">                                   
                                        <NavDropdown.Item className="dropdown-item" href="#1">Action</NavDropdown.Item>
                                        <NavDropdown.Item className="dropdown-item" href="#2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item className="dropdown-item" href="#3">Something else here</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Nav className="navbar-nav ml-auto small mt-3 mt-md-0 mb-2 mb-md-0 main-menu align-items-center">
                                    <NavDropdown title="For Food Banks" aria-labelledby="dropdown01">                                   
                                        <NavDropdown.Item className="dropdown-item" href="#4">Action</NavDropdown.Item>
                                        <NavDropdown.Item className="dropdown-item" href="#6">Another action</NavDropdown.Item>
                                        <NavDropdown.Item className="dropdown-item" href="#7">Something else here</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>                        
                            <div className="user-avatar">
                                <NavDropdown eventKey={1} title={                                    
                                    <img className="thumbnail-image" src={userIcon} alt="user pic" />
                                     }> 
                                    <DropdownItem eventKey={1.1} href="/profile">Basil TJ</DropdownItem> 
                                    <DropdownItem eventKey={1.1} href="/profile">Profile</DropdownItem> 
                                    <DropdownItem divider /> 
                                    <DropdownItem eventKey={1.3}> 
                                        <i className="fa fa-sign-out"></i> Logout 
                                    </DropdownItem> 
                                </NavDropdown>
                            </div>
                    </Navbar>
                </div>
            </Nav>
    )
};

export default HeaderComponent;