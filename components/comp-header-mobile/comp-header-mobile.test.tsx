import { render, screen } from '@testing-library/react';
import CompHeaderMobile from './index';

describe('CompHeaderMobile', () => {
  it('renders correctly', () => {
    render(<CompHeaderMobile />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
