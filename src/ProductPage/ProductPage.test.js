import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductPage from './ProductPage';

describe('<ProductPage />', () => {
  test('it should mount', () => {
    render(<ProductPage />);
    
    const productPage = screen.getByTestId('ProductPage');

    expect(productPage).toBeInTheDocument();
  });
});