/**
 * Confirmation Component
 */
import React, { useContext } from "react";
import MainHeadingComponent from "../General/MainHeadingComponent";
import NavigationBtnComponent from "../General/NavigationBtnComponent";

import '../../Assets/scss/main.scss';
import ButtonComponent from "../General/ButtonComponent";

const FreshTrakDoc = (props) => {
  // React.useEffect(()=> headShortner('navbar-green'));

  return (
    <React.Fragment>
        <section>
          <div className="container pt-100 pb-100 register-confirmation">
            <div className="row">
              <div className="col-md-12">
                <NavigationBtnComponent {...props}/>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="title-wrap">
                  <h1 className="big-title mt-5 mb-5 mobile-mb">
                  Partners in ending hunger.
                  </h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 col-md-6">
                <div className="content-wrapper">
                The Mid-Ohio Foodbank was established with an audacious goal in mind: No one goes hungry. For 40 years we’ve been focused on feeding our friends and neighbors. As part of the Feeding America network we’ve been working on a national scale to learn, share, and organize in an effort to get meals to as many hungry families as possible.

With FreshTrak, we’re looking to leverage our experience to create a tool that feeds families faster, more securely, with solutions that fit their unique challenges. This new tool is designed for food banks to do the work that we do, while leveraging our collective power to help get meals where they are needed the most.

When you register with FreshTrak, you’ll get access to reporting that helps you know where to distribute your food, what sort of resources to provide your community, and reduce wait times at your events by pre-registering recipients ahead of time.


Predict Need: Register neighbors ahead of time or, where possible, schedule a pick-up appointment, so your organization can plan for any increase in demand.
Serve Food: You post food access “events” in your community—anything from daily pantry hours to pop-up food events—and neighbors enter their zip code to get connected to them. 
Move Quickly: Remove the bottleneck from distribution with online customer pre-registration. Serve more customers, safely! 

                </div>
              </div>
              <div className="col-lg-4 col-md-6">
               
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 col-md-6">
                
              </div>
              <div className="col-lg-4 col-md-6">
                
                <ButtonComponent
                  type="button"
                  name="backToHome"
                  dataid=""
                  id="back-to-home"
                  value="Contact Us For More Information"
                  className="btn custom-button mt-3 w-100"
                  onClickfunction={() => props.history.push({
                    pathname : '/',
                    state: { }
                })}
                />
              </div>
            </div>
          </div>
        </section>
    </React.Fragment>
  );
};

export default FreshTrakDoc;
