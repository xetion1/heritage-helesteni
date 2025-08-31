import { render, screen } from '@testing-library/react';
import CompSelectMulti from './index';

describe('CompSelectMulti', () => {
  it('renders correctly', () => {
    render(<CompSelectMulti />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
