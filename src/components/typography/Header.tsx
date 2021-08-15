import { ComponentChildren } from 'preact';
import { FontSize, theme } from '../../css/theme';
import { styled } from '@linaria/react';

type Variant = 'primary' | 'secondary';

type Props = {
    as: 'h1' | 'h2';
    size?: FontSize;
    variant?: Variant;
    style?: {};
    children: ComponentChildren;
};

export const Header = ({ as, size = 'default', variant = 'primary', style, children }: Props) => {
    const props = {
        fontSize: theme.fontSize[size],
        color: variant === 'primary' ? theme.colors.textPrimary : theme.colors.textSecondary,
        style,
    };

    if (as === 'h1') {
        return <H1 {...props}>{children}</H1>;
    }

    if (as === 'h2') {
        return <H2 {...props}>{children}</H2>;
    }

    return <h6>{children}</h6>;
};

type CommonHeaderProps = {
    fontSize: string;
    color: string;
};

const H1 = styled.h1<CommonHeaderProps>`
    font-weight: 500;
    margin-bottom: ${theme.spacing[2]};
    font-size: ${(props) => props.fontSize};
    color: ${(props) => props.color};
`;

const H2 = styled.h2<CommonHeaderProps>`
    font-weight: 400;
    font-size: ${(props) => props.fontSize};
    color: ${(props) => props.color};
`;
