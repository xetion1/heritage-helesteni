import { render, screen } from '@testing-library/react';
import Carousel from './index';

describe('Carousel', () => {
  it('renders correctly', () => {
    render(<Carousel />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
