import { render, screen } from '@testing-library/react';
import CompStepper from './index';

describe('CompStepper', () => {
  it('renders correctly', () => {
    render(<CompStepper />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
