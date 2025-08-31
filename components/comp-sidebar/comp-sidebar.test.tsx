import { render, screen } from '@testing-library/react';
import CompSidebar from './index';

describe('CompSidebar', () => {
  it('renders correctly', () => {
    render(<CompSidebar />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
