import { render, screen } from '@testing-library/react';
import Review from './index';

describe('Review', () => {
  it('renders correctly', () => {
    render(<Review />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
