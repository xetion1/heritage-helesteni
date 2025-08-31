import { render, screen } from '@testing-library/react';
import Error from './index';

describe('Error', () => {
  it('renders correctly', () => {
    render(<Error />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
