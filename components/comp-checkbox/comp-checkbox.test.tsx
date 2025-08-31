import { render, screen } from '@testing-library/react';
import CompCheckbox from './index';

describe('CompCheckbox', () => {
  it('renders correctly', () => {
    render(<CompCheckbox />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
