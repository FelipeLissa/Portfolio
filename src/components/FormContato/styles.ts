import { darken} from 'polished';
import styled from 'styled-components';

export const Container = styled.section``;

export const FormContainer = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
  margin-top:4rem;


    button {
    margin:0rem 6rem 0rem 6rem;
    border: none;
    padding: 1rem 2.5rem;
    color: white;
    font-weight: 500;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    background: linear-gradient(225deg, ${({theme}) => theme.primary} 30%, #6610f299 100%);
    transition: 0.5s;

    &:disabled {
      opacity: 0.5;
    }
    &:not(:disabled):hover {
      background: ${({ theme }) => darken(0.05, theme.primary)};
    }
  }
  @media (max-width: 700px) {
    margin-top: 5rem;
  }
  @media (max-width: 450px) {
    > button {
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
    }
  }
`;

export const Input = styled.input`
  height: 3rem;  
  margin:0rem 6rem 0rem 6rem;
  background: ${({ theme }) => theme.inputBackground};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 1.7rem 1.5rem;
  color: ${({ theme }) => theme.primary};
  border-radius: 0.5rem;
  font-size: 1.2rem;
  outline: none;
  transition: 0.5s;


  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
  &::placeholder {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 450px) {
    padding: 1.4rem;
    font-size: 1rem;
  }
`;

export const TextArea = styled.textarea`
  height: 10rem;
  margin:0rem 6rem 0rem 6rem;
  background: ${({ theme }) => theme.inputBackground};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 1.7rem 1.5rem;
  color: ${({ theme }) => theme.primary};
  border-radius: 0.5rem;
  font-size: 1.2rem;
  outline: none;
  transition: 0.5s;
  resize: none;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
  &::placeholder {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 700px) {
    grid-column: 1;
  }
  @media (max-width: 450px) {
    padding: 1.4rem;
    font-size: 1rem;
  }
`;