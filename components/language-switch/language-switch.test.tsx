import { render, screen } from '@testing-library/react';
import LanguageSwitch from './index';

describe('LanguageSwitch', () => {
  it('renders correctly', () => {
    render(<LanguageSwitch />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
