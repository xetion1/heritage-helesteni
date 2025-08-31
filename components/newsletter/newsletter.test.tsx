import { render, screen } from '@testing-library/react';
import Newsletter from './index';

describe('Newsletter', () => {
  it('renders correctly', () => {
    render(<Newsletter />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
