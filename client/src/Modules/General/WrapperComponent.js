/**
 * Wrapper Component wraps the whole application.
 * Contains global header and footer.
 */

import React from "react";
import HeaderContainer from "../Header/HeaderContainer";
import FooterContainer from "../Footer/FooterContainer";
import {HeaderProvider} from '../../Store/ContextApi/HeaderContext'
const WrapperComponent = (props) => {

  return (
    <React.Fragment>
      <HeaderProvider value={{ shortHeader: "navbar-green" }}>
        <HeaderContainer />
        {props.children}
        <FooterContainer {...props}/>
      </HeaderProvider>
    </React.Fragment>
  );
};

export default WrapperComponent;
