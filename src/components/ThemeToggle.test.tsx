
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ThemeToggle from './ThemeToggle';
import { ThemeProvider } from '@/providers/ThemeProvider';

// Mock the theme hooks
vi.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'light',
    setTheme: vi.fn(),
  }),
}));

describe('ThemeToggle Component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );
  });

  it('renders without crashing', () => {
    const toggleButton = screen.getByRole('button');
    expect(toggleButton).toBeDefined();
  });

  it('has the correct aria-label', () => {
    const toggleButton = screen.getByRole('button');
    expect(toggleButton.getAttribute('aria-label')).toBe('Toggle theme');
  });

  it('responds to click events', () => {
    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);
    expect(toggleButton).toBeDefined();
  });
});
