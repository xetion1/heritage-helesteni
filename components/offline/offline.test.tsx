import { render, screen } from '@testing-library/react';
import Offline from './index';

describe('Offline', () => {
  it('renders correctly', () => {
    render(<Offline />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
