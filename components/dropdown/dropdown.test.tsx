import { render, screen } from '@testing-library/react';
import Dropdown from './index';

describe('Dropdown', () => {
  it('renders correctly', () => {
    render(<Dropdown />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
