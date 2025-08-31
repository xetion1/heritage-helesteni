import { render, screen } from '@testing-library/react';
import CompDatepicker from './index';

describe('CompDatepicker', () => {
  it('renders correctly', () => {
    render(<CompDatepicker />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
