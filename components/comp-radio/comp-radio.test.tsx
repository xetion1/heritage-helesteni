import { render, screen } from '@testing-library/react';
import CompRadio from './index';

describe('CompRadio', () => {
  it('renders correctly', () => {
    render(<CompRadio />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
