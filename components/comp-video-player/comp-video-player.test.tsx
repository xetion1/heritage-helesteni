import { render, screen } from '@testing-library/react';
import CompVideoPlayer from './index';

describe('CompVideoPlayer', () => {
  it('renders correctly', () => {
    render(<CompVideoPlayer />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
