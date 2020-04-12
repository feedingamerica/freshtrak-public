import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchComponent from '../SearchComponent';
import { noop } from '../../../Testing';

test('should render', () => {
  expect(() => {
    render(
      <SearchComponent
        onSelectedChild={noop}
      />
    );
  }).not.toThrowError();
});

test('should show error an invalid submit', () => {
  const { getByText } = render(
    <SearchComponent
      onSelectedChild={noop}
    />
  );
  fireEvent.click(
    getByText(/Search For Resources/i)
  );

  getByText(/this field is required/i);
});
