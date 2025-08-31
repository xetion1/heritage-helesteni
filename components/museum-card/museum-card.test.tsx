import { render, screen } from '@testing-library/react';
import MuseumCard from './index';

describe('MuseumCard', () => {
  it('renders correctly', () => {
    render(<MuseumCard />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
