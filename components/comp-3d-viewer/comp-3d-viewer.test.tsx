import { render, screen } from '@testing-library/react';
import Comp3dViewer from './index';

describe('Comp3dViewer', () => {
  it('renders correctly', () => {
    render(<Comp3dViewer />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
