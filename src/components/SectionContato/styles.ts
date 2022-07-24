import styled from 'styled-components';

export const Container = styled.div`
    display:inline-block;
    flex-direction: center;
    align-items: center;
    gap: 0.5rem;
    margin-top: 5rem;
    margin-left: 6rem;


    h1 {
        color: ${({theme}) => theme.primary};
        font-size: 4.5rem;
    }

    h2 {
        color: ${({theme}) => theme.secondary};
        font-weight: 300;
        font-size: 3.5rem;
    }

    @media (max-width: 1000px) {

        h1 {
        font-size: 2.5rem;
    }

    h2 {
        font-size: 1.8rem;
    }
    }


    @media (max-width: 500px) {

        h1 {
        font-size: 1.8rem;
    }

    h2 {
        font-size: 1.2rem;
    }
    }
`;
