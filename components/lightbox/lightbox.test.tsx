import { render, screen } from '@testing-library/react';
import Lightbox from './index';

describe('Lightbox', () => {
  it('renders correctly', () => {
    render(<Lightbox />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
