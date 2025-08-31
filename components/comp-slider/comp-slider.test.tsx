import { render, screen } from '@testing-library/react';
import CompSlider from './index';

describe('CompSlider', () => {
  it('renders correctly', () => {
    render(<CompSlider />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
