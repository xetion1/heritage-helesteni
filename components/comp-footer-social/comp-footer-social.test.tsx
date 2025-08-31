import { render, screen } from '@testing-library/react';
import CompFooterSocial from './index';

describe('CompFooterSocial', () => {
  it('renders correctly', () => {
    render(<CompFooterSocial />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
