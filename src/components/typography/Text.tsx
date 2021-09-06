import { css } from '@linaria/core';
import { useRenderLinks } from '../../hooks/useRenderLinks';

type Props = {
  children: string;
  maxWidth?: number;
};

export const Text = ({ children, maxWidth = 58 }: Props) => {
  const renderedText = useRenderLinks(children);

  return (
    <p class={paragraph} style={{ '--maxWidth': `${maxWidth}ch` }}>
      {renderedText}
    </p>
  );
};

const paragraph = css`
  color: var(--text-color-secondary);
  max-width: var(--maxWidth);
  line-height: 1.4;
`;
