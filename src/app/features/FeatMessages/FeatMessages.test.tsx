import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FeatMessages from './FeatMessages';

describe('<FeatMessages />', () => {
  test('it should mount', () => {
    render(<FeatMessages />);
    
    const featMessages = screen.getByTestId('FeatMessages');

    expect(featMessages).toBeInTheDocument();
  });
});