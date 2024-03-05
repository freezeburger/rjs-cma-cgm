import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ViewHome from './ViewHome';

describe('<ViewHome />', () => {
  test('it should mount', () => {
    render(<ViewHome />);
    
    const viewHome = screen.getByTestId('ViewHome');

    expect(viewHome).toBeInTheDocument();
  });
});