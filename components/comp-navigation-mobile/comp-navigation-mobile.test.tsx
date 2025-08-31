import { render, screen } from '@testing-library/react';
import CompNavigationMobile from './index';

describe('CompNavigationMobile', () => {
  it('renders correctly', () => {
    render(<CompNavigationMobile />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
