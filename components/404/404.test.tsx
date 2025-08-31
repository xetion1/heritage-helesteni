import { render, screen } from '@testing-library/react';
import 404 from './index';

describe('404', () => {
  it('renders correctly', () => {
    render(<404 />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
