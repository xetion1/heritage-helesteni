import { render, screen } from '@testing-library/react';
import CompInputFile from './index';

describe('CompInputFile', () => {
  it('renders correctly', () => {
    render(<CompInputFile />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
