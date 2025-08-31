import { render, screen } from '@testing-library/react';
import Input from './index';

describe('Input', () => {
  it('renders correctly', () => {
    render(<Input />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
