import { render, screen } from '@testing-library/react';
import CompCardPricing from './index';

describe('CompCardPricing', () => {
  it('renders correctly', () => {
    render(<CompCardPricing />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
