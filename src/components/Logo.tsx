import { styled } from '@linaria/react';

type Props = {
  className?: string;
  size?: number;
};

export const Logo = ({ size = 50, className }: Props) => {
  const CX = String(Number(size) * 0.9);
  const CY = '50%';
  const strokeWidth = 22;

  // 115 is from the viewBox
  const RADIUS = 115 / 2 - strokeWidth / 2;
  const strokeDasharray = RADIUS * 2 * Math.PI;
  const strokeDashoffset = strokeDasharray * 0.2;

  return (
    <div className={className}>
      <SVG
        width={size / 2}
        viewBox="0 0 115 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 20.9091H81.2983L114.647 0H33.3487L0 20.9091Z"
          fill="var(--logo-grey)"
          className="logo-bar-1"
        />
        <path
          d="M0 67.9546H80.9016L114.088 47.0455H33.186L0 67.9546Z"
          fill="var(--color-primary)"
          className="logo-bar-2"
        />
        <path
          d="M0 115H80.9016L114.088 94.0909H33.186L0 115Z"
          fill="var(--logo-grey)"
          className="logo-bar-3"
        />
      </SVG>
      <SVG
        width={size / 2}
        // circleOrigin={[CX, CY]}
        viewBox="0 0 115 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeDashOffset={strokeDashoffset}
      >
        <path
          d="M115 46H54V67H83.0926L115 46Z"
          fill="var(--color-primary)"
          className="logo-bar-4"
        />
        <circle
          cx="50%"
          cy="50%"
          r={RADIUS}
          fill="none"
          strokeWidth={strokeWidth}
          stroke="var(--logo-grey)"
          strokeDasharray={strokeDasharray}
          className="logo-curve"
        ></circle>
      </SVG>
    </div>
  );
};

const SVG = styled.svg<{ strokeDashOffset?: number }>`
  margin: 0 0.2rem;
  color: var(---logo-grey);

  .logo-curve {
    stroke-dashoffset: ${({ strokeDashOffset }) =>
      strokeDashOffset ? strokeDashOffset : 0};
    transform: rotate(33deg);
    transform-origin: 50% 50%;
  }

  &:hover {
    /* For glitch animation */
    --logo-grey: currentColor;
  }

  &:first-of-type:hover {
    color: var(--color-secondary);
  }
`;
