import React, { Fragment, forwardRef, useState } from 'react';

const MemberCountFormComponent = forwardRef(({ register, errors }, ref) => {
  const [countSenior, setCountSenior] = useState(0);
  const [countAdult, setCountAdult] = useState(0);
  const [countKid, setCountKid] = useState(0);

  const seniorDecrementFunction = e => {
    e.preventDefault();
    const newCount = countSenior - 1;
    if (newCount >= 0) {
      setCountSenior(newCount);
    }

  };

  const seniorIncrementFunction = e => {
    e.preventDefault();
    setCountSenior(countSenior + 1);
  };

  const adultDecrementFunction = e => {
    const newCount = countAdult - 1
    e.preventDefault();
    if (newCount >= 0) {
      setCountAdult(countAdult - 1);
    }
  };

  const adultIncrementFunction = e => {
    e.preventDefault();
    setCountAdult(countAdult + 1);
  };

  const kidDecrementFunction = e => {
    const newCount = countKid - 1
    e.preventDefault();
    if (newCount >= 0) {
      setCountKid(countKid - 1);
    }
  };

  const kidIncrementFunction = e => {
    e.preventDefault();
    setCountKid(countKid + 1);
  };

  return (
    <Fragment>
      <div className="form-sub-title font-weight-bold">
        Total Number of Household Members
        <div className="mt-3 pt-1">
          <div className="d-flex align-items-center pt-2 pb-2">
            <div className="member-age">Seniors (65+)</div>
            <div className="button-wrap d-flex flex-grow-1"></div>
            <button
              onClick={seniorDecrementFunction}
              name="count_senior_dec"
              className="rounded-button"
              type="button"
            >
              <span>-</span>
            </button>
            <input
              type="text"
              className="number member-count"
              name="count_senior"
              value={countSenior}
              onChange={() => {}}
              ref={register}
            ></input>
            <button
              onClick={seniorIncrementFunction}
              name="count_senior_inc"
              className="rounded-button"
            >
              <span>+</span>
            </button>
          </div>

          <div className="d-flex align-items-center pt-2 pb-2">
              <div className="member-age">Adults (18+)</div>
              <div className="button-wrap d-flex flex-grow-1"></div>
            <button
              onClick={adultDecrementFunction}
              name="count_adult_dec"
              className="rounded-button"
              type="button"
            >
              <span>-</span>
            </button>
            <input
              type="text"
              className="number member-count"
              name="count_adult"
              value={countAdult}
              onChange={() => {}}
              ref={register}
            ></input>
            <button
              onClick={adultIncrementFunction}
              name="count_adult_inc"
              className="rounded-button"
            >
              <span>+</span>
            </button>
          </div>

          <div className="d-flex align-items-center pt-2 pb-2">
              <div className="member-age">Adults (18+)</div>
              <div className="button-wrap d-flex flex-grow-1"></div>
            <button
              onClick={kidDecrementFunction}
              name="count_kid_dec"
              className="rounded-button"
              type="button"
            >
              <span>-</span>
            </button>
            <input
              type="text"
              className="number member-count"
              name="count_kid"
              value={countKid}
              onChange={() => {}}
              ref={register}
            ></input>
            <button
              onClick={kidIncrementFunction}
              name="count_kid_inc"
              className="rounded-button"
            >
              <span>+</span>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

export default MemberCountFormComponent;
