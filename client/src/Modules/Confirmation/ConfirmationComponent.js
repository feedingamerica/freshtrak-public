/**
 * Confirmation Component
 */
import React from 'react';
import MainHeadingComponent from '../General/TextContent/MainHeadingComponent';
import NavigationBtnComponent from '../General/Buttons/NavigationBtnComponent';
import YourInformationComponent from '../Events1/YourInformationComponent';
import EventDescriptionComponent from '../Events1/EventDescriptionComponent';
import AgencyDetailsComponent from '../Agency/AgencyDetailsComponent';
import TimeDateComponent from '../General/TimeDateComponent';
import '../../Assets/scss/main.scss';
import FooterContainer from '../Footer/FooterContainer';
import HeaderComponent from '../Header/HeaderComponent';
import ButtonComponent from '../General/ButtonComponent';


const ConfirmationComponent = (props) => {

    return (
        <div>
                <HeaderComponent shortHeader={'navbar-green'}/>
            
            
            <section>
            <div className="container pt-100 pb-100 register-confirmation">
                <div className="row d-none-xs">
                    <div className="col-md-12">
                        <NavigationBtnComponent />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <MainHeadingComponent text="You're Registered"/>
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
                        
                    <ButtonComponent type ='button' name="backToHome" dataid= '' id="back-to-home" value="Back to Home" className = 'btn custom-button mt-3 w-100'  />
                    </div>
                </div>
            </div>
        </section>
        <FooterContainer />
        </div>
    )

};

export default ConfirmationComponent;