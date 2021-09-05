import { css } from '@linaria/core';
import { Link } from 'wouter-preact';
import { ExternalLink } from '../components/ExternalLink';

const linkRegex = /(\[.*?\]\(.*?\))/;
const hyperLinkRegex = /\[.*\]/;
const hrefRefex = /\(.*\)/;

export const useRenderLinks = (text: string) => {
  const renderedText = text.split(linkRegex).map((str) => {
    if (str.match(linkRegex)) {
      const hyperlink = str.match(hyperLinkRegex)![0].replace(/[\[\]\(\)]/g, '');
      const href = str.match(hrefRefex)![0].replace(/[()]/g, '');
      console.log({ hyperlink });

      return href.startsWith('https://') ? (
        <ExternalLink href={href}>{hyperlink}</ExternalLink>
      ) : (
        <Link href={href}>
          <a class={linkStyles}>{hyperlink}</a>
        </Link>
      );
    }

    return `${str} `;
  });

  return renderedText;
};

const linkStyles = css`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    bottom: 0;
    border-bottom: 0.5px solid currentColor;
    transition: color 0.1s ease;
  }

  &:hover {
    color: var(--color-primary);
  }
`;
