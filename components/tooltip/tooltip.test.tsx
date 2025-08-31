import { render, screen } from '@testing-library/react';
import Tooltip from './index';

describe('Tooltip', () => {
  it('renders correctly', () => {
    render(<Tooltip />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
