import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    border-top: 3px solid ${({theme}) => theme.primary};
    margin-top: 5rem;
    
    >section {
        margin-top: 8rem;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 7rem;
        padding-bottom: 8rem;
        border-bottom: 3px solid ${({theme}) => theme.primary};
        

        @media(max-width:1100px) {
            gap: 5rem;
            flex-wrap: wrap;
        }
        @media(max-width: 700px) {
            gap: 3rem;
            margin-top: 5rem;
        }
    }
`;

export const ConhecimentoContainer = styled.div `

    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
    justify-content: center;



    p {
        color: ${({theme}) => theme.primary};
        font-weight: 500;
        font-size: 1.3rem;
        text-transform: uppercase;
    }

    svg {
        width: 6.5rem;
        height: 6.5rem;
        color: ${({theme}) => theme.secondary};
        transition: 0.3s;
    }

    &:hover {
        svg {
            color: ${({theme}) => theme.primary};
            transform: scale(0.95);
        }
    }

    @media(max-width: 1000px) {
        p {
            font-size: 1rem;
        }
        svg {
            width: 5rem;
            height: 5rem;
        }
    }




`
