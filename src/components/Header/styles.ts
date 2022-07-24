import { lighten } from 'polished';
import styled from 'styled-components';
import theme from '../../styles/theme';

interface NavLinkProps {
    isActive: boolean
}

export const Container = styled.header`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
height: 4rem;
border-bottom: 1px solid ${({theme}) => theme.primary};

ul {
    display: flex;
    gap: 2rem;
    align-items: center;
}
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
a{
    text-transform: uppercase;
    color: ${(props) => props.isActive ? props.theme.primary : props.theme.textHighLight};
    transition: 0.5s;

    &:hover {
        color:${props => props.isActive 
        ? lighten(0.2, props.theme.primary) 
        : lighten(0.2, props.theme.textHighLight) }
    }
}`
