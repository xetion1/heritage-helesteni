import { render, screen } from '@testing-library/react';
import Breadcrumb from './index';

describe('Breadcrumb', () => {
  it('renders correctly', () => {
    render(<Breadcrumb />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
