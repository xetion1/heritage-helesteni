import { render, screen } from '@testing-library/react';
import CompTabs from './index';

describe('CompTabs', () => {
  it('renders correctly', () => {
    render(<CompTabs />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
