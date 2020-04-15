/**
 * Created by Basil on 04/04/20.
 */

import React, { useEffect, useState } from "react";

import mainLogo from "../../Assets/img/logo.png";
import navBarIcon from "../../Assets/img/menu.svg";
import { Link } from "react-router-dom";
import CustomModalComponent from "../General/CustomModalComponent";
import {
  Nav,
  NavDropdown,
  Navbar,
  DropdownItem,
  Button,
} from "react-bootstrap";
import userIcon from "../../Assets/img/Mask.svg";

import ButtonComponent from "../General/ButtonComponent";
import { RENDER_URL } from "../../Utils/Urls";
const HeaderComponent = (props) => {
  const [navbarShrink, setNavbarShrink] = useState("");
  const [show, setShow] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const shortHeader = props.shortHeader || "";

  useEffect(() => {
    console.log("HeaderComponent", new Date().getTime());
    if (localStorage.getItem("isLoggedIn") !== null) {
      setIsLoggedIn(true);
    }
    window.onscroll = () => {
      if (window.pageYOffset > 100) {
        setNavbarShrink("navbar-shrink");
      } else {
        setNavbarShrink("");
      }
    };
  }, [localStorage.getItem("isLoggedIn"), isLoggedIn]);

  const [modalShow, setModalShow] = React.useState(false);
  return (
    <React.Fragment>
      <Nav
        className={`navbar navbar-expand-md navbar-light fixed-top ${navbarShrink} ${shortHeader}`}
        id="mainNav"
      >
        <div className="container">
          <Navbar expand="md" className="w-100">
            <Navbar.Brand className="my-auto mobile-view">
              <span className="my-auto mobile-view">
                <Link to={RENDER_URL.HOME_URL}>
                  <img
                    src={mainLogo}
                    alt="FreshTrak"
                    className="d-inline-block"
                  />{" "}
                </Link>
              </span>
              <button
                className="navbar-toggler mr-2"
                type="button"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon">
                  <img src={navBarIcon} alt="UserLogo" className="img-fluid" />
                </span>
              </button>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="navbarCollapse"
              className="justify-content-end"
            >
              <Nav className="navbar-nav small main-menu align-items-center">
                <NavDropdown
                  title="Find Resources"
                  aria-labelledby="dropdown01"
                >
                  <NavDropdown.Item className="dropdown-item" href="#1">
                    Action
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-item" href="#2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-item" href="#3">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav className="navbar-nav small  main-menu align-items-center">
                <NavDropdown
                  title="For Food Banks"
                  aria-labelledby="dropdown01"
                >
                  <NavDropdown.Item className="dropdown-item" href="#4">
                    Action
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-item" href="#6">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-item" href="#7">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>

            {/* Sign In Button */}
            {/* <ButtonComponent type ='button' name="signIn" dataid= '' id="sign-in" value="Sign In" className = 'btn default-button flex-grow-1' onClickfunction={showModal} /> */}
            {isLoggedIn ? (
              <div className="user-avatar">
                <NavDropdown
                  title={
                    <img
                      className="thumbnail-image"
                      src={userIcon}
                      alt="user pic"
                    />
                  }
                >
                  <DropdownItem
                    eventKey={1.3}
                    onClick={() => {
                      localStorage.removeItem("isLoggedIn", false);
                      setIsLoggedIn(false);
                      window.location.reload();
                    }}
                  >
                    <i className="fa fa-sign-out"></i> Logout
                  </DropdownItem>
                </NavDropdown>
                {/* <div className="user-avatar">
                                {isLoggedIn == false ? <LoggedInComponent/> : <SignInComponent/>} */}
              </div>
            ) : (
              <button
                className="sign-in-button"
                style={{ minHeight: "0px", marginLeft: "20px" }}
                onClick={() => setModalShow(true)}
              >
                Sign In
              </button>
            )}
          </Navbar>
        </div>
      </Nav>

      <CustomModalComponent
        signin={'true'}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </React.Fragment>
  );
};

export default HeaderComponent;
