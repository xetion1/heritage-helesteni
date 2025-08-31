import { render, screen } from '@testing-library/react';
import CompSelect from './index';

describe('CompSelect', () => {
  it('renders correctly', () => {
    render(<CompSelect />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
