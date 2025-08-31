import { render, screen } from '@testing-library/react';
import Calendar from './index';

describe('Calendar', () => {
  it('renders correctly', () => {
    render(<Calendar />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
