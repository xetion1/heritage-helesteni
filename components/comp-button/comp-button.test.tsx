import { render, screen } from '@testing-library/react';
import CompButton from './index';

describe('CompButton', () => {
  it('renders correctly', () => {
    render(<CompButton />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
