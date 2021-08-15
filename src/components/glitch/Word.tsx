import { styled } from '@linaria/react';
import { TextContainer } from './Text';

export const WordContainer = styled(TextContainer)`
    display: inline-block;
    margin-right: 0.3em;

    &::before,
    &::after {
        content: attr(data-text);
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
    }

    &::before {
        text-shadow: -3px 0 var(--color-primary);
        left: 3px;
        animation: glitch 1s linear alternate-reverse;
    }

    &::after {
        text-shadow: -3px 0 var(--color-secondary), 2px 2px var(--color-secondary);
        left: -3px;
    }

    @keyframes glitch {
        0% {
            clip: rect(5px, 9999px, 54px, 0);
            transform: skew(0.32deg);
        }
        5% {
            clip: rect(82px, 9999px, 49px, 0);
            transform: skew(0.95deg);
        }
        10% {
            clip: rect(32px, 9999px, 71px, 0);
            transform: skew(0.13deg);
        }
        15% {
            clip: rect(91px, 9999px, 100px, 0);
            transform: skew(0.68deg);
        }
        20% {
            clip: rect(94px, 9999px, 52px, 0);
            transform: skew(0.92deg);
        }
        25% {
            clip: rect(27px, 9999px, 20px, 0);
            transform: skew(0.48deg);
        }
        30% {
            clip: rect(49px, 9999px, 42px, 0);
            transform: skew(0.42deg);
        }
        35% {
            clip: rect(37px, 9999px, 17px, 0);
            transform: skew(0.41deg);
        }
        40% {
            clip: rect(68px, 9999px, 18px, 0);
            transform: skew(0.04deg);
        }
        45% {
            clip: rect(5px, 9999px, 86px, 0);
            transform: skew(0.98deg);
        }
        50% {
            clip: rect(15px, 9999px, 48px, 0);
            transform: skew(0.53deg);
        }
        55% {
            clip: rect(2px, 9999px, 31px, 0);
            transform: skew(0.79deg);
        }
        60% {
            clip: rect(19px, 9999px, 18px, 0);
            transform: skew(0.06deg);
        }
        65% {
            clip: rect(28px, 9999px, 85px, 0);
            transform: skew(0.16deg);
        }
        70% {
            clip: rect(7px, 9999px, 74px, 0);
            transform: skew(0.63deg);
        }
        75% {
            clip: rect(13px, 9999px, 6px, 0);
            transform: skew(0.5deg);
        }
        80% {
            clip: rect(25px, 9999px, 20px, 0);
            transform: skew(0.36deg);
        }
        85% {
            clip: rect(49px, 9999px, 7px, 0);
            transform: skew(0.76deg);
        }
        90% {
            clip: rect(55px, 9999px, 9px, 0);
            transform: skew(0.96deg);
        }
        95% {
            clip: rect(67px, 9999px, 73px, 0);
            transform: skew(0.79deg);
        }
        100% {
            clip: rect(29px, 9999px, 5px, 0);
            transform: skew(0.2deg);
        }
    }
`;
