//routing files
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HeaderContainer from "../Modules/Header/HeaderContainer";
import FooterContainer from "../Modules/Footer/FooterContainer";
import { HeaderProvider } from "../Store/ContextApi/HeaderContext";

// import { browserHistory } from 'react-router';
import { webService } from '../Services/ApiService';
import "../Assets/scss/main.scss";
const App = lazy(() => import("../App"));

const Routes = () => {
  const [shortHeader, setShortHeader] = React.useState("");
  React.useEffect(() => {}, []);

  return (
    <Router  >
      <HeaderProvider value={{ shortHeader: "navbar-green" }}>
        <HeaderContainer shortHeader={shortHeader} />
        <Suspense fallback={<div className="displayNone"> </div>}>
          <Route render={(props) => <App {...props} />} />

          <FooterContainer />
        </Suspense>
      </HeaderProvider>
    </Router>
  );
};
export default Routes;
