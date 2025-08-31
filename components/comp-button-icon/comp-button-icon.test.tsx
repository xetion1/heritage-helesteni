import { render, screen } from '@testing-library/react';
import CompButtonIcon from './index';

describe('CompButtonIcon', () => {
  it('renders correctly', () => {
    render(<CompButtonIcon />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
