import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import HeaderComponent from '../Header/HeaderComponent';
import RegistrationHeaderComponent from './RegistartionHeaderComponent';
import RegistrationTextComponent from './RegistrationTextComponent';
import HouseHoldFormComponent from './HouseHoldFormComponent';
import MemberCountFormComponent from './MemberCountFormComponent';
import PrimaryInfoFormComponent from './PrimaryInfoFormComponent';

import '../../Assets/scss/main.scss';

const FamilyContainer = () => {
  const { register, handleSubmit, errors, getValues } = useForm();
  const onSubmit = data => { console.log(data) };
  return (
    <Fragment>
      <HeaderComponent shortHeader={'navbar-green'} />
      <div className="main-wrapper mt-4">
        <section className="container pt-100 pb-100 register-confirmation">
          <div>
            <RegistrationHeaderComponent />
          </div>
          <div className="registration-form">
            <div className="content-wrapper">
              <RegistrationTextComponent />
              <form onSubmit={handleSubmit(onSubmit)}>
                <HouseHoldFormComponent register={register} errors={errors} />
                <MemberCountFormComponent register={register} errors={errors} />
                <PrimaryInfoFormComponent register={register} errors={errors} getValues={getValues} />
                <div className="button-wrap mt-4">
                  <button
                    type="submit"
                    className="btn custom-button"
                    data-testid="continue button"
                  >Continue</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default FamilyContainer;
