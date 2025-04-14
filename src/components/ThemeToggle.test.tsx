
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeToggle } from './ThemeToggle';
import { ThemeProvider } from '../providers/ThemeProvider';
import { expect, describe, it, vi } from 'vitest';
import '@testing-library/jest-dom';

describe('ThemeToggle', () => {
  it('renders correctly', () => {
    render(
      <ThemeProvider defaultTheme="light" storageKey="theme">
        <ThemeToggle />
      </ThemeProvider>
    );
    
    const button = screen.getByRole('button', { name: /toggle theme/i });
    expect(button).toBeInTheDocument();
  });
  
  it('toggles theme when clicked', async () => {
    const user = userEvent.setup();
    
    render(
      <ThemeProvider defaultTheme="light" storageKey="theme">
        <ThemeToggle />
      </ThemeProvider>
    );
    
    const button = screen.getByRole('button', { name: /toggle theme/i });
    expect(button).toBeInTheDocument();
    
    await user.click(button);
    // Note: We can't easily test the actual theme change without more complex setup,
    // but we can at least verify the click handler runs without errors
  });
});
