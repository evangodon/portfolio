import { css } from '@linaria/core';
import { theme } from '../../css/theme';
import { useRenderLinks } from '../../hooks/useRenderLinks';

type Props = {
  children: string;
};

export const Text = ({ children }: Props) => {
  const renderedText = useRenderLinks(children);

  return <p class={paragraph}>{renderedText}</p>;
};

const paragraph = css`
  color: var(--text-color-secondary);
  max-width: 60ch;
  margin-bottom: ${theme.spacing[4]};
`;
