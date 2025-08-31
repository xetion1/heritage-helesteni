import { render, screen } from '@testing-library/react';
import CompNavigationMegaMenu from './index';

describe('CompNavigationMegaMenu', () => {
  it('renders correctly', () => {
    render(<CompNavigationMegaMenu />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
