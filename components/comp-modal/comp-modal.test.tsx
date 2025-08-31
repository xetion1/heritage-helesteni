import { render, screen } from '@testing-library/react';
import CompModal from './index';

describe('CompModal', () => {
  it('renders correctly', () => {
    render(<CompModal />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
