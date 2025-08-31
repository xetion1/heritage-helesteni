import { render, screen } from '@testing-library/react';
import Hero from './index';

describe('Hero', () => {
  it('renders correctly', () => {
    render(<Hero />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
