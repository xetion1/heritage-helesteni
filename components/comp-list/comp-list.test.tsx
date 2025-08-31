import { render, screen } from '@testing-library/react';
import CompList from './index';

describe('CompList', () => {
  it('renders correctly', () => {
    render(<CompList />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
