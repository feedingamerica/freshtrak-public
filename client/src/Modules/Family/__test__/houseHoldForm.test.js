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
