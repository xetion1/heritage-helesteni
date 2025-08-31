import { render, screen } from '@testing-library/react';
import CompCard from './index';

describe('CompCard', () => {
  it('renders correctly', () => {
    render(<CompCard />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
