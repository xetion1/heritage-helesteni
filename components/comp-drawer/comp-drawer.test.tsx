import { render, screen } from '@testing-library/react';
import CompDrawer from './index';

describe('CompDrawer', () => {
  it('renders correctly', () => {
    render(<CompDrawer />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
