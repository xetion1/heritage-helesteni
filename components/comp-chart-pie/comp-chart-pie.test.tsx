import { render, screen } from '@testing-library/react';
import CompChartPie from './index';

describe('CompChartPie', () => {
  it('renders correctly', () => {
    render(<CompChartPie />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
