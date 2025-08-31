import { render, screen } from '@testing-library/react';
import CompListVirtual from './index';

describe('CompListVirtual', () => {
  it('renders correctly', () => {
    render(<CompListVirtual />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
