import { render, screen } from '@testing-library/react';
import Sidebar from './index';

describe('Sidebar', () => {
  it('renders correctly', () => {
    render(<Sidebar />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
