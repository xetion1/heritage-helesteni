import { render, screen } from '@testing-library/react';
import CompTimeline from './index';

describe('CompTimeline', () => {
  it('renders correctly', () => {
    render(<CompTimeline />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
