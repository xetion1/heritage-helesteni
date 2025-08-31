import { render, screen } from '@testing-library/react';
import CompCardBlog from './index';

describe('CompCardBlog', () => {
  it('renders correctly', () => {
    render(<CompCardBlog />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
