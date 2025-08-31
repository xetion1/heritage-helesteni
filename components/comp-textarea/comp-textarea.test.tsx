import { render, screen } from '@testing-library/react';
import CompTextarea from './index';

describe('CompTextarea', () => {
  it('renders correctly', () => {
    render(<CompTextarea />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
