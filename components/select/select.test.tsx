import { render, screen } from '@testing-library/react';
import Select from './index';

describe('Select', () => {
  it('renders correctly', () => {
    render(<Select />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
