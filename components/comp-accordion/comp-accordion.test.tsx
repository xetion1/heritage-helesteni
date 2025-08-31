import { render, screen } from '@testing-library/react';
import CompAccordion from './index';

describe('CompAccordion', () => {
  it('renders correctly', () => {
    render(<CompAccordion />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
