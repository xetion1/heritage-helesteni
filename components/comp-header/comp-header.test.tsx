import { render, screen } from '@testing-library/react';
import CompHeader from './index';

describe('CompHeader', () => {
  it('renders correctly', () => {
    render(<CompHeader />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
