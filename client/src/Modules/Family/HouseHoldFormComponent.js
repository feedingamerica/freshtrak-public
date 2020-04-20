import React, { Fragment, forwardRef } from 'react';

const HouseHoldFormComponent = forwardRef(({ register, errors }, ref) => (
  <Fragment>
    <div className="form-group">
      <label htmlFor="street_address">Street Address</label>
      <input
        type="text"
        className="form-control"
        name="street_address"
        ref={register({ required: true })}
      />
      {errors.street_address && <span className="text-danger">This field is required</span>}
    </div>

    <div className="d-flex">
      <div className="form-group">
        <label htmlFor="apt_no">Unit or Apt.</label>
        <input
          type="text"
          className="form-control"
          name="apt_no"
          ref={register}
        />
      </div>
      <div className="form-group ml-2">
        <label htmlFor="zip_code">Zip Code</label>
        <input
          type="text"
          className="form-control"
          name="zip_code"
          ref={register({ required: true })}
        />
        {errors.zip_code && <span className="text-danger">This field is required</span>}
      </div>
    </div>

    <div className="d-flex">
      <div className="form-group">
        <label htmlFor="city">City</label>
        <input
          type="text"
          className="form-control"
          name="city"
          ref={register}
        />
      </div>
      <div className="form-group ml-2">
        <label htmlFor="state">State</label>
        <input
          type="text"
          className="form-control"
          name="state"
          ref={register({ required: true })}
        />
        {errors.state && <span className="text-danger">This field is required</span>}
      </div>
    </div>
  </Fragment>
));

export default HouseHoldFormComponent;
