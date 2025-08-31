import { render, screen } from '@testing-library/react';
import CompCardProduct from './index';

describe('CompCardProduct', () => {
  it('renders correctly', () => {
    render(<CompCardProduct />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
