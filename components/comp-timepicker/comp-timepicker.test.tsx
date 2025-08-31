import { render, screen } from '@testing-library/react';
import CompTimepicker from './index';

describe('CompTimepicker', () => {
  it('renders correctly', () => {
    render(<CompTimepicker />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
