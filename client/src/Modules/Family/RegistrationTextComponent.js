import React from 'react';
import '../../Assets/scss/main.scss';

const RegistrationTextComponent = () => {
  return (
    <div>
      <div className="content-wrapper page-info-wrap">
        <p>
          <span className="font-weight-bold">
            Registering in advance is optional.
          </span>{' '}
          By registering, you can speed up your time at the pickup site.
        </p>

        <p>
          You will also create an account with FreshTrak, allowing you to
          register faster in the future.
        </p>

        <p>
          (If you have previously created a FreshTrak account,you can sign in to
          continue.)
        </p>
      </div>
    </div>
  );
};

export default RegistrationTextComponent;
