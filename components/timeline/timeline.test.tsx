import { render, screen } from '@testing-library/react';
import Timeline from './index';

describe('Timeline', () => {
  it('renders correctly', () => {
    render(<Timeline />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
