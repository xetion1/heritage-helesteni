import { render, screen } from '@testing-library/react';
import CompMasonry from './index';

describe('CompMasonry', () => {
  it('renders correctly', () => {
    render(<CompMasonry />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
