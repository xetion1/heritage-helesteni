import { render, screen } from '@testing-library/react';
import CompFooterNewsletter from './index';

describe('CompFooterNewsletter', () => {
  it('renders correctly', () => {
    render(<CompFooterNewsletter />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
