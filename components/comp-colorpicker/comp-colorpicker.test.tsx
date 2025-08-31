import { render, screen } from '@testing-library/react';
import CompColorpicker from './index';

describe('CompColorpicker', () => {
  it('renders correctly', () => {
    render(<CompColorpicker />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
