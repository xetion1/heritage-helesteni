import { render, screen } from '@testing-library/react';
import CompChartBar from './index';

describe('CompChartBar', () => {
  it('renders correctly', () => {
    render(<CompChartBar />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
