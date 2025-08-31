import { render, screen } from '@testing-library/react';
import Tabs from './index';

describe('Tabs', () => {
  it('renders correctly', () => {
    render(<Tabs />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
