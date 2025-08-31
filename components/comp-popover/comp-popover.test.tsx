import { render, screen } from '@testing-library/react';
import CompPopover from './index';

describe('CompPopover', () => {
  it('renders correctly', () => {
    render(<CompPopover />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
