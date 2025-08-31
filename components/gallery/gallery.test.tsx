import { render, screen } from '@testing-library/react';
import Gallery from './index';

describe('Gallery', () => {
  it('renders correctly', () => {
    render(<Gallery />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
