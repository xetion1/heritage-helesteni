import { render, screen } from '@testing-library/react';
import CompGrid from './index';

describe('CompGrid', () => {
  it('renders correctly', () => {
    render(<CompGrid />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
