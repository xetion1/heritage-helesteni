import { render, screen } from '@testing-library/react';
import Modal from './index';

describe('Modal', () => {
  it('renders correctly', () => {
    render(<Modal />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
