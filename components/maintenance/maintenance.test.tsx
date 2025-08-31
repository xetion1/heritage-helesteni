import { render, screen } from '@testing-library/react';
import Maintenance from './index';

describe('Maintenance', () => {
  it('renders correctly', () => {
    render(<Maintenance />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
