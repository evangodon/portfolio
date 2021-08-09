import { css } from '@linaria/core';

export const glitchAnimations = css`
  :global() {
    body {
      @keyframes glitch_skew {
        0% {
          transform: skew(0deg);
        }
        10% {
          transform: skew(2deg);
        }
        20% {
          transform: skew(5deg);
        }
        30% {
          transform: skew(0deg);
        }
        40% {
          transform: skew(-2deg);
        }
        50% {
          transform: skew(1deg);
        }
        60% {
          transform: skew(5deg);
        }
        70% {
          transform: skew(-2deg);
        }
        80% {
          transform: skew(-4deg);
        }
        90% {
          transform: skew(2deg);
        }
        100% {
          transform: skew(1deg);
        }
      }
    }
  }
`;
