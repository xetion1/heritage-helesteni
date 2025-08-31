import { render, screen } from '@testing-library/react';
import CompChartLine from './index';

describe('CompChartLine', () => {
  it('renders correctly', () => {
    render(<CompChartLine />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
