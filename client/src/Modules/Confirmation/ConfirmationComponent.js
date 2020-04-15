/**
 * Confirmation Component
 */
import React from "react";
import NavigationBtnComponent from "../General/NavigationBtnComponent";
import YourInformationComponent from "../Events/YourInformationComponent";
import EventDescriptionComponent from "../Events/EventDescriptionComponent";
import AgencyDetailsComponent from "../Agency/AgencyDetailsComponent";
import TimeDateComponent from "../General/TimeDateComponent";

import "../../Assets/scss/main.scss";
import ButtonComponent from "../General/ButtonComponent";

const ConfirmationComponent = (props) => {
  // React.useEffect(()=> headShortner('navbar-green'));

  return (
    <React.Fragment>
      <section>
        <div className="container pt-100 pb-100 register-confirmation">
          <div className="row">
            <div className="col-md-12">
              <NavigationBtnComponent {...props} />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="title-wrap">
                <h1 className="big-title mt-5 mb-5 mobile-mb">
                  You're Registered.
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-6">
              <div className="content-wrapper">
                <AgencyDetailsComponent />
                <TimeDateComponent />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <YourInformationComponent />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-6">
              <EventDescriptionComponent />
            </div>
            <div className="col-lg-4 col-md-6">
              <ButtonComponent
                type="button"
                name="backToHome"
                dataid=""
                id="back-to-home"
                value="Back to Home"
                className="btn custom-button mt-3 w-100"
                onClickfunction={() =>
                  props.history.push({
                    pathname: "/",
                    state: {},
                  })
                }
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ConfirmationComponent;
