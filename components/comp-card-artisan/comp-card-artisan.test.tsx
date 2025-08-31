import { render, screen } from '@testing-library/react';
import CompCardArtisan from './index';

describe('CompCardArtisan', () => {
  it('renders correctly', () => {
    render(<CompCardArtisan />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
