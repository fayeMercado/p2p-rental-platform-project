import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ItemPage from './ItemPage';

describe('<ItemPage />', () => {
  test('it should mount', () => {
    render(<ItemPage />);
    
    const itemPage = screen.getByTestId('ItemPage');

    expect(itemPage).toBeInTheDocument();
  });
});