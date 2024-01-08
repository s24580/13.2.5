import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CalculatorAction from './CalculatorAction';

const renderWithRouter = (component, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(<Router>{component}</Router>);
};

describe('CalculatorAction', () => {
  test('renders add action result', () => {
    renderWithRouter(<CalculatorAction action="add" />, { route: '/?x=5&y=3' });
    expect(screen.getByText('Result: 8')).toBeInTheDocument();
  });

  test('renders subtract action result', () => {
    renderWithRouter(<CalculatorAction action="sub" />, { route: '/?x=5&y=3' });
    expect(screen.getByText('Result: 2')).toBeInTheDocument();
  });

  test('renders multiply action result', () => {
    renderWithRouter(<CalculatorAction action="mul" />, { route: '/?x=5&y=3' });
    expect(screen.getByText('Result: 15')).toBeInTheDocument();
  });

  test('renders divide action result', () => {
    renderWithRouter(<CalculatorAction action="div" />, { route: '/?x=6&y=3' });
    expect(screen.getByText('Result: 2')).toBeInTheDocument();
  });

  test('handles division by zero', () => {
    renderWithRouter(<CalculatorAction action="div" />, { route: '/?x=5&y=0' });
    expect(screen.getByText('Cannot divide by zero')).toBeInTheDocument();
  });

  test('handles invalid action', () => {
    renderWithRouter(<CalculatorAction action="invalid" />, {
      route: '/?x=5&y=3',
    });
    expect(screen.getByText('Invalid action')).toBeInTheDocument();
  });
});
