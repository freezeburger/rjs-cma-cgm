import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ViewProfile from './ViewProfile';

describe('<ViewProfile />', () => {
  test('it should mount', () => {
    render(<ViewProfile />);
    
    const viewProfile = screen.getByTestId('ViewProfile');

    expect(viewProfile).toBeInTheDocument();
  });
});