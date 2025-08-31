import { render, screen } from '@testing-library/react';
import Loading from './index';

describe('Loading', () => {
  it('renders correctly', () => {
    render(<Loading />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
