import React from 'react';
import { render } from '@testing-library/react';
import HouseHoldFormComponent from '../HouseHoldFormComponent';
import { noop } from '../../../Testing';

test('should render', () => {
  expect(() => {
    render(
      <HouseHoldFormComponent
        onSelectedChild={noop}
        onFormErrors={noop}
      />
    );
  }).not.toThrowError();
});
