import { render, screen } from '@testing-library/react';
import ArtistProfile from './index';

describe('ArtistProfile', () => {
  it('renders correctly', () => {
    render(<ArtistProfile />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
