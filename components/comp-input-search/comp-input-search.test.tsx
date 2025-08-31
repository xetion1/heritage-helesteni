import { render, screen } from '@testing-library/react';
import CompInputSearch from './index';

describe('CompInputSearch', () => {
  it('renders correctly', () => {
    render(<CompInputSearch />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
