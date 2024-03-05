import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FeatTopic from './FeatTopic';

describe('<FeatTopic />', () => {
  test('it should mount', () => {
    render(<FeatTopic />);
    
    const featTopic = screen.getByTestId('FeatTopic');

    expect(featTopic).toBeInTheDocument();
  });
});