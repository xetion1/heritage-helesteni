import { render, screen } from '@testing-library/react';
import CompCardEvent from './index';

describe('CompCardEvent', () => {
  it('renders correctly', () => {
    render(<CompCardEvent />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
