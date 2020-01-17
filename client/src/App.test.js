import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Navbar from './Components/Navbar';

test("App renders without crashing", () => {
  render(<App />)
})

it('renders navbar', () => {
  render(<Navbar />);
});

it('Contains the Navbar header', () => {
  const { getByText } = render(<Navbar />);
  getByText(/women/i);
});

it('Contains the toggle button', () => {
  const { getByTestId } = render(<Navbar />);
  getByTestId("toggle-button");
});