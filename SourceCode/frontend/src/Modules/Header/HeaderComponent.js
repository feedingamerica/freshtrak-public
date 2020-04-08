/**
 * Created by Basil on 04/04/20.
 */

import React, { useEffect, useState } from 'react';

import mainLogo from '../../Assets/img/logo.png';
import navBarIcon from '../../Assets/img/menu.svg';
import userIcon from '../../Assets/img/Mask.svg';
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
    }, []);;
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
            </nav>
    )
};

export default HeaderComponent;