const theme = {
  colors: {
    sidebarBackground: 'var(--sidebar-bg)',
    background: 'var(--grey-500)',
  },
  fontSize: {
    xsmall: '1rem',
    small: '1.2rem',
    medium: '1.3rem',
    default: '1.6rem',
    large: '2rem',
    xlarge: '3.2rem',
  },
  spacing: {
    1: '0.4rem',
    2: '0.8rem',
    3: '1.6rem',
    4: '2.4rem',
    5: '3.2rem',
    6: '4.8rem',
  },
} as const;

type Spacing = keyof typeof theme['spacing'];

type FontSize = keyof typeof theme['fontSize'];

export { theme };

export type { Spacing, FontSize };
