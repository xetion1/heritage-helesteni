import { render, screen } from '@testing-library/react';
import CompHeaderSticky from './index';

describe('CompHeaderSticky', () => {
  it('renders correctly', () => {
    render(<CompHeaderSticky />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
