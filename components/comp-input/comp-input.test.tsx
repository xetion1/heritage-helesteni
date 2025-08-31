import { render, screen } from '@testing-library/react';
import CompInput from './index';

describe('CompInput', () => {
  it('renders correctly', () => {
    render(<CompInput />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
