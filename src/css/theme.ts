const theme = {
  colors: {
    primary: 'var(--color-primary)',
    sidebarBackground: 'var(--sidebar-bg)',
    background: 'var(--grey-500)',
    textPrimary: 'var(--text-color)',
    textSecondary: 'var(--text-color-secondary)',
  },
  fontSize: {
    xsmall: 'var(--fs-xsmall)',
    small: 'var(--fs-small)',
    medium: 'var(--fs-medium)',
    default: 'var(--fs-default)',
    large: 'var(--fs-large)',
    xlarge: 'var(--fs-xlarge)',
  },
  spacing: {
    1: '0.4rem',
    2: '0.8rem',
    3: '1.6rem',
    4: '2.4rem',
    5: '3.2rem',
    6: '4.8rem',
    7: '5.6rem',
    8: '8rem',
    9: '11.2rem',
  },
} as const;

type Spacing = keyof typeof theme['spacing'];

type FontSize = keyof typeof theme['fontSize'];

export { theme };

export type { Spacing, FontSize };
