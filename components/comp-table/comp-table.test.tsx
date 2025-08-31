import { render, screen } from '@testing-library/react';
import CompTable from './index';

describe('CompTable', () => {
  it('renders correctly', () => {
    render(<CompTable />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
