import { render, screen } from '@testing-library/react';
import CompImageZoom from './index';

describe('CompImageZoom', () => {
  it('renders correctly', () => {
    render(<CompImageZoom />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
