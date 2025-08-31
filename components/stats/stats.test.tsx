import { render, screen } from '@testing-library/react';
import Stats from './index';

describe('Stats', () => {
  it('renders correctly', () => {
    render(<Stats />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
