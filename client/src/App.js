import React, { lazy, Suspense } from "react";
import "./Assets/scss/main.scss";

import { RENDER_URL } from "./Utils/Urls";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const ConfirmationComponent = lazy(() =>
  import("./Modules/Confirmation/ConfirmationComponent")
);
const DashBoardContainer = lazy(() =>
  import("./Modules/Dashboard/DashBoardContainer")
);
const EventContainer = lazy(() => import("./Modules/Events/EventContainer"));
const FamilyContainer = lazy(() => import("./Modules/Family/FamilyContainer"));

const App = (props) => {
  React.useEffect(() => {}, []);
  return (
    <div className="App">
      <div className="main-wrapper">
        <Switch>
          <Route
            exact
            path={RENDER_URL.HOME_URL}
            component={DashBoardContainer}
          />
          <Route
            exact
            path={RENDER_URL.EVENT_LIST_URL}
            component={EventContainer}
          />
          <Route
            exact
            path={RENDER_URL.ADD_FAMILY_URL}
            render={(props) => <FamilyContainer {...props} />}
          />
          <Route
            exact
            path={RENDER_URL.EVENT_CONFIRM_URL}
            render={(props) => <ConfirmationComponent {...props} />}
          />

          {/* Add URLs above this line */}
        </Switch>
      </div>
    </div>
  );
};

export default App;
