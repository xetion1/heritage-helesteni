import { render, screen } from '@testing-library/react';
import Textarea from './index';

describe('Textarea', () => {
  it('renders correctly', () => {
    render(<Textarea />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
