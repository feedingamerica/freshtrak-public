import React from "react";
import PrimaryInfoFormComponent from "./PrimaryInfoFormComponent";
import HouseHoldFormComponent from "./HouseHoldFormComponent";
import MemberCountFormComponent from "./MemberCountFormComponent";
import PasswordRegistrationFormComponent from "./PasswordRegistrationFormComponent";
import AdditionalPickUpFormComponent from "./AdditionalPickUpFormComponent";
import RegistrationTextComponent from "./RegistrationTextComponent";
import { confirm, showMessage } from "../../Utils/Util";
import "../../Assets/scss/main.scss";
import NavigationBtnComponent from "../General/NavigationBtnComponent";

const FamilyContainer = (props) => {
  let familyData = [];
  let formError = "";
  let componentErrors = [];

  const nameFormRef = React.useRef();
  const addressFormRef = React.useRef();
  const zipFormRef = React.useRef();
  const dobFormRef = React.useRef();

  const handleFormValidation = (e) => {
    e.preventDefault();
    componentErrors.push(
      nameFormRef.current.triggerErrors(),
      zipFormRef.current.triggerErrors(),
      addressFormRef.current.triggerErrors()
    );
    if (componentErrors.includes(true) || Object.keys(formError).length !== 0) {
      showMessage("error", "Kindly fix all errors and continue");
      return false;
    }
    handleSubmitConfirm();
  };

  const handleSubmitConfirm = () => {
    let title = "Are you sure you want to proceed?";
    confirm(title, handleSubmit);
  };

  const handleSubmit = () => {
    let familyDetails = {
      familyMemberData: {
        first_name: familyData.nameData
          ? familyData.nameData.nameData.first_name
          : "",
        last_name: familyData.nameData
          ? familyData.nameData.nameData.last_name
          : "",
        middle_name: familyData.nameData
          ? familyData.nameData.nameData.middle_name
          : "",
        hoh: familyData.nameData ? familyData.nameData.nameData.hoh : "",
        dob: familyData.nameData ? familyData.nameData.nameData.dob : "",
        suffix: familyData.nameData ? familyData.nameData.nameData.suffix : "",
        phoneNumber: familyData.nameData
          ? familyData.nameData.nameData.phoneNumber
          : "",
        phoneNumberCheckBOx: familyData.nameData
          ? familyData.nameData.nameData.phoneNumberCheckBOx
          : "",
        email: familyData.nameData ? familyData.nameData.nameData.email : "",
        communicationPreference: familyData.nameData
          ? familyData.nameData.nameData.communicationPreference
          : "",
      },

      HouseHoldData: {
        address: familyData.addressData
          ? familyData.addressData.addressData.streetAddress
          : "",
        apt_number: familyData.addressData
          ? familyData.addressData.addressData.aptNo
          : "",
        zipcode: familyData.zipData ? familyData.zipData.zipData.zip : "",
      },

      passwordData: {
        password: familyData.passwordData
          ? familyData.passwordData.passwordData.password
          : "",
      },

      memberCountData: {
        countSenior: familyData.memberCountData
          ? familyData.memberCountData.memberCountData.countSenior
          : "",
        countMiddle: familyData.memberCountData
          ? familyData.memberCountData.memberCountData.countMiddle
          : "",
        countJunior: familyData.memberCountData
          ? familyData.memberCountData.memberCountData.countMiddle
          : "",
      },

      pickuptData: {
        pickupInfo: familyData.pickupData
          ? familyData.pickupData.pickupData.pickupInfo
          : "",
        pickupName: familyData.pickupData
          ? familyData.pickupData.pickupData.pickupName
          : "",
        pickupNumberPlate: familyData.pickupData
          ? familyData.pickupData.pickupData.pickupNumberPlate
          : "",
      },
    };

    if (familyDetails) {
    } else {
      showMessage("error", "Something went wrong");
    }
  };

  const buildFamilyData = (childFamilyData) => {
    let dataKey = Object.keys(childFamilyData)[0];
    familyData[dataKey] = childFamilyData;
  };

  const formErrors = (errors) => {
    formError = errors;
  };

  return (
    <div>
      <div className="main-wrapper">
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
                    Register Now. Save time Later.
                  </h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 col-md-6">
                <div className="content-wrapper">
                  <div className="medium-title font-weight-bold">
                    Kroger Food Pantry EXPRESS
                  </div>
                  <div className="d-flex">
                    <div className="pantry-name flex-grow-1">
                      Prepack Pantry
                    </div>
                  </div>
                  <div className="d-flex flex-column mt-3 mb-3 time-wrapper">
                    <span>Selected Time</span>
                    <span className="font-weight-bold time-value">1:00 pm</span>
                    <span>Monday, 4/2/2020</span>
                  </div>
                  <div className="d-flex flex-column mt-3 mb-3 address-wrapper">
                    <span>225 E Gates St,</span>
                    <span>Columbus, OH 43206</span>
                    <span>(321) 456-0987</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <RegistrationTextComponent />
                <form>
                  <div className="content-wrapper pt-100">
                    <div className="form-fields">
                      <HouseHoldFormComponent
                        ref={addressFormRef}
                        onSelectedChild={buildFamilyData}
                        onFormErrors={formErrors}
                      />

                      <MemberCountFormComponent
                        ref={addressFormRef}
                        onSelectedChild={buildFamilyData}
                        onFormErrors={formErrors}
                      />
                    </div>
                    <div className="form-fields pt-50">
                      <PrimaryInfoFormComponent
                        ref={addressFormRef}
                        onSelectedChild={buildFamilyData}
                        onFormErrors={formErrors}
                      />

                      <PasswordRegistrationFormComponent
                        ref={addressFormRef}
                        onSelectedChild={buildFamilyData}
                        onFormErrors={formErrors}
                      />

                      <AdditionalPickUpFormComponent
                        ref={addressFormRef}
                        onSelectedChild={buildFamilyData}
                        onFormErrors={formErrors}
                      />

                      <div className="button-wrap mt-4">
                        <button className="btn custom-button">Continue</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FamilyContainer;
