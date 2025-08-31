import { render, screen } from '@testing-library/react';
import Chart from './index';

describe('Chart', () => {
  it('renders correctly', () => {
    render(<Chart />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
