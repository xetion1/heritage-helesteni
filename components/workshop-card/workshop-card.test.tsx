import { render, screen } from '@testing-library/react';
import WorkshopCard from './index';

describe('WorkshopCard', () => {
  it('renders correctly', () => {
    render(<WorkshopCard />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
