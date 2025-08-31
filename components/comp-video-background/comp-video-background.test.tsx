import { render, screen } from '@testing-library/react';
import CompVideoBackground from './index';

describe('CompVideoBackground', () => {
  it('renders correctly', () => {
    render(<CompVideoBackground />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
