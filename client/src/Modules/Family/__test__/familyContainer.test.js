import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import FamilyContainer from '../FamilyContainer.js';

test('it should render without errors', () => {
  expect(() => {
    render(
      <Router>
        <FamilyContainer />
      </Router>
    );
  }).not.toThrowError();
});

test(`should show 'Passwords should match!' if passwords do not match`, async () => {
  const { getByLabelText, getByTestId, getByText } = render(
    <Router>
      <FamilyContainer />
    </Router>
  );

  // Act is necessary for react-hook-forms to fire in the testing env
  // https://github.com/react-hook-form/react-hook-form/issues/532
  await act(async () => {
    fireEvent.input(
      getByLabelText('Password', { id: 'password' }),
      {
        target: { value: 'test' },
      }
    );

    fireEvent.input(
      getByLabelText(/confirm password/i, { id: 'password_confirm' }),
      {
        target: { value: 'not test' },
      }
    );
    fireEvent.click(getByTestId(/continue button/i));
  });
  
  getByText('Passwords should match!');
});

test(`should show to click 'No Phone Available' if no phone available is not clicked and nothing is in the phone number`, async () => {
  const { getByLabelText, getByTestId, queryByTestId } = render(
    <Router>
      <FamilyContainer />
    </Router>
  );

  await act(async () => {
    fireEvent.click(getByTestId(/continue button/i));
  });
  getByTestId('no phone error');

  await act(async () => {
    fireEvent.input(
      getByLabelText(/No Phone Available/i, { id: 'no_phone_number' }),
      {
        target: { checked: true }
      }
    );
    fireEvent.click(getByTestId(/continue button/i));
  });
  expect(queryByTestId('no phone error')).toBeNull();
});
