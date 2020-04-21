import React from 'react';
import { render } from '@testing-library/react';
import HouseHoldFormComponent from '../HouseHoldFormComponent';
import { noop } from '../../../Testing';

test('should render', () => {
  expect(() => {
    render(
      <HouseHoldFormComponent register={noop} errors={noop} />
    );
  }).not.toThrowError();
});

test('should show invalid form if required field is not filled out', () => {
  const { getByText } = render(
    <HouseHoldFormComponent register={noop} errors={{ street_address: true }} />
  );
  getByText(/This field is required/i);
});
