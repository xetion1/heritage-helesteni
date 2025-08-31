import { render, screen } from '@testing-library/react';
import AudioPlayer from './index';

describe('AudioPlayer', () => {
  it('renders correctly', () => {
    render(<AudioPlayer />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
