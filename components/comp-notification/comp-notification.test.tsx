import { render, screen } from '@testing-library/react';
import CompNotification from './index';

describe('CompNotification', () => {
  it('renders correctly', () => {
    render(<CompNotification />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
