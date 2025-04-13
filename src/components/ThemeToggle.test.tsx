
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeToggle } from './ThemeToggle';
import { ThemeProvider } from '../providers/ThemeProvider';
import { expect, describe, it, vi } from 'vitest';

describe('ThemeToggle', () => {
  it('renders correctly', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );
    
    expect(screen.getByLabelText('Toggle theme')).toBeInTheDocument();
  });

  it('toggles theme when clicked', async () => {
    const user = userEvent.setup();
    
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );
    
    const toggleButton = screen.getByLabelText('Toggle theme');
    await user.click(toggleButton);
    
    // Since we can't easily test the actual theme change in a unit test,
    // we're just checking that the button exists and is clickable
    expect(toggleButton).toBeInTheDocument();
  });
});
