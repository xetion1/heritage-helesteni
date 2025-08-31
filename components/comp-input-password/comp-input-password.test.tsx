import { render, screen } from '@testing-library/react';
import CompInputPassword from './index';

describe('CompInputPassword', () => {
  it('renders correctly', () => {
    render(<CompInputPassword />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
