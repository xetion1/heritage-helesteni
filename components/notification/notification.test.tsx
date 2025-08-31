import { render, screen } from '@testing-library/react';
import Notification from './index';

describe('Notification', () => {
  it('renders correctly', () => {
    render(<Notification />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
