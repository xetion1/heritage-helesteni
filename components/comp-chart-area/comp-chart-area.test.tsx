import { render, screen } from '@testing-library/react';
import CompChartArea from './index';

describe('CompChartArea', () => {
  it('renders correctly', () => {
    render(<CompChartArea />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
