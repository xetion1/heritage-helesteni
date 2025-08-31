import { render, screen } from '@testing-library/react';
import SocialShare from './index';

describe('SocialShare', () => {
  it('renders correctly', () => {
    render(<SocialShare />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
