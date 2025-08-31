import { render, screen } from '@testing-library/react';
import CompModalConfirm from './index';

describe('CompModalConfirm', () => {
  it('renders correctly', () => {
    render(<CompModalConfirm />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
