import { render, screen } from '@testing-library/react';
import Sort from './index';

describe('Sort', () => {
  it('renders correctly', () => {
    render(<Sort />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
