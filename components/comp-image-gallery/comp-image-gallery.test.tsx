import { render, screen } from '@testing-library/react';
import CompImageGallery from './index';

describe('CompImageGallery', () => {
  it('renders correctly', () => {
    render(<CompImageGallery />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
