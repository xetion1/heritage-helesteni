import { render, screen } from '@testing-library/react';
import CompToast from './index';

describe('CompToast', () => {
  it('renders correctly', () => {
    render(<CompToast />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
