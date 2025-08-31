import { render, screen } from '@testing-library/react';
import CompAudioPlayer from './index';

describe('CompAudioPlayer', () => {
  it('renders correctly', () => {
    render(<CompAudioPlayer />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
