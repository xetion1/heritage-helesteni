import { render, screen } from '@testing-library/react';
import CompCardWorkshop from './index';

describe('CompCardWorkshop', () => {
  it('renders correctly', () => {
    render(<CompCardWorkshop />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
