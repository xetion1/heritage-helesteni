import { render, screen } from '@testing-library/react';
import CookieBanner from './index';

describe('CookieBanner', () => {
  it('renders correctly', () => {
    render(<CookieBanner />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
