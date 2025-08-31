import { render, screen } from '@testing-library/react';
import VideoPlayer from './index';

describe('VideoPlayer', () => {
  it('renders correctly', () => {
    render(<VideoPlayer />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
