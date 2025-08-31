import { render, screen } from '@testing-library/react';
import CompImage from './index';

describe('CompImage', () => {
  it('renders correctly', () => {
    render(<CompImage />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
