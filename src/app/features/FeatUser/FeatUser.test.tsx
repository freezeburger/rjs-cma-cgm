import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FeatUser from './FeatUser';

describe('<FeatUser />', () => {
  test('it should mount', () => {
    render(<FeatUser />);
    
    const featUser = screen.getByTestId('FeatUser');

    expect(featUser).toBeInTheDocument();
  });
});