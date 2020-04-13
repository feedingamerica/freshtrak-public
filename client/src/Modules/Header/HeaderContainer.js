/**
 * Created by Basil on 6/1/20.
 */
import React, { useEffect, useState, useContext } from "react";
import HeaderComponent from "./HeaderComponent";
import HeaderDataComponent from "./HeaderDataComponent";
import { HeaderContext } from "../../Store/ContextApi/HeaderContext";
import { useLocation } from "react-router-dom";
import { RENDER_URL } from "../../Utils/Urls";
import '../../Assets/scss/main.scss';

const HeaderContainer = (props) => {
  let location = useLocation();
  const headerContext = useContext(HeaderContext);
  const shortHeader = headerContext.shortHeader;

  return (
    <div>
      {location.pathname == RENDER_URL.EVENT_CONFIRM_URL ||
      location.pathname == RENDER_URL.ADD_FAMILY_URL ? (
        <HeaderComponent shortHeader={"navbar-green"} />
      ) : (
        <header className="header">
          <HeaderComponent />
          <HeaderDataComponent />
        </header>
      )}
    </div>
  );
};

export default HeaderContainer;
