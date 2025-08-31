import { render, screen } from '@testing-library/react';
import CompModalForm from './index';

describe('CompModalForm', () => {
  it('renders correctly', () => {
    render(<CompModalForm />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
