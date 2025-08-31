import { render, screen } from '@testing-library/react';
import Map from './index';

describe('Map', () => {
  it('renders correctly', () => {
    render(<Map />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
