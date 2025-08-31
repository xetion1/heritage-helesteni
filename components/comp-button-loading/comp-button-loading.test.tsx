import { render, screen } from '@testing-library/react';
import CompButtonLoading from './index';

describe('CompButtonLoading', () => {
  it('renders correctly', () => {
    render(<CompButtonLoading />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
