import { render, screen } from '@testing-library/react';
import CompBreadcrumb from './index';

describe('CompBreadcrumb', () => {
  it('renders correctly', () => {
    render(<CompBreadcrumb />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
