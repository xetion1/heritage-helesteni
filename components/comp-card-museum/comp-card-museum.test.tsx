import { render, screen } from '@testing-library/react';
import CompCardMuseum from './index';

describe('CompCardMuseum', () => {
  it('renders correctly', () => {
    render(<CompCardMuseum />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
