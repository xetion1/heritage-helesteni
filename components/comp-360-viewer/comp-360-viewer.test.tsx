import { render, screen } from '@testing-library/react';
import Comp360Viewer from './index';

describe('Comp360Viewer', () => {
  it('renders correctly', () => {
    render(<Comp360Viewer />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
