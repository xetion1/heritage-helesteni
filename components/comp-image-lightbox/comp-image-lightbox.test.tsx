import { render, screen } from '@testing-library/react';
import CompImageLightbox from './index';

describe('CompImageLightbox', () => {
  it('renders correctly', () => {
    render(<CompImageLightbox />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
