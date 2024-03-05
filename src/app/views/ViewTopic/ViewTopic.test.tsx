import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ViewTopic from './ViewTopic';

describe('<ViewTopic />', () => {
  test('it should mount', () => {
    render(<ViewTopic />);
    
    const viewTopic = screen.getByTestId('ViewTopic');

    expect(viewTopic).toBeInTheDocument();
  });
});