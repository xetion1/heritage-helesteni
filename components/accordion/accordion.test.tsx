import { render, screen } from '@testing-library/react';
import Accordion from './index';

describe('Accordion', () => {
  it('renders correctly', () => {
    render(<Accordion />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
