import { render, screen } from '@testing-library/react';
import CompBackToTop from './index';

describe('CompBackToTop', () => {
  it('renders correctly', () => {
    render(<CompBackToTop />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
