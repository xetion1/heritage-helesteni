import { render, screen } from '@testing-library/react';
import CompInfiniteScroll from './index';

describe('CompInfiniteScroll', () => {
  it('renders correctly', () => {
    render(<CompInfiniteScroll />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
