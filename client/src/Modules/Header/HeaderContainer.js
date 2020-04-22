/**
 * Created by Basil on 6/1/20.
 */
import React, { useContext } from "react";
import HeaderComponent from "./HeaderComponent";
import HeaderDataComponent from "./HeaderDataComponent";
import { HeaderContext } from "../../Store/ContextApi/HeaderContext";
import { useLocation } from "react-router-dom";
import { RENDER_URL } from "../../Utils/Urls";
import '../../Assets/scss/main.scss';

const HeaderContainer = () => {
  let location = useLocation();
  const headerContext = useContext(HeaderContext);
  const shortHeader = headerContext.shortHeader;

  return (
    <div>
      {location.pathname == RENDER_URL.EVENT_CONFIRM_URL ||
      location.pathname == RENDER_URL.ADD_FAMILY_URL ? (
        <HeaderComponent shortHeader={shortHeader} />
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
