import { render, screen } from '@testing-library/react';
import EventCard from './index';

describe('EventCard', () => {
  it('renders correctly', () => {
    render(<EventCard />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
