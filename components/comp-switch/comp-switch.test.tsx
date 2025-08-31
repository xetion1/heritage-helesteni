import { render, screen } from '@testing-library/react';
import CompSwitch from './index';

describe('CompSwitch', () => {
  it('renders correctly', () => {
    render(<CompSwitch />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
