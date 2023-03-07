import styled from "styled-components";

interface IContainerInput {
  variant: 'inputText' | 'inputForm'
  error?: boolean
}

export const ContainerInput = styled.div <IContainerInput>`

  width: 100%;
  height: 5.5rem;
  
  display: flex;
  align-items: center;

  ${({ error }) => error && 'border: 2px solid red; background: red;'}

  border-radius: 1rem;
  
  .icon{
    max-width: 100%;
    width: 5.5rem;
    height: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    cursor: pointer;
    border-radius: 1rem 0 0 1rem;

    background-color: ${({ theme }) => theme.Colors.orange};
  }
  
  input{
    width: 100%;
    height: 100%;

    padding: 1rem .6rem;

    border-radius: ${({ variant }) => variant === 'inputText' ? '1rem' : '0 1rem 1rem 0'};

    outline: none;
    border: none;
    
    background-color: ${({ theme }) => theme.Colors.greySmoke};
    color: ${({ theme }) => theme.Colors.grey};
    
    font-size: ${props => props.theme.Typography.TextRegular.size};
    font-weight: ${props => props.theme.Typography.TextRegular.weight};
    
    &::placeholder{
      color: ${({ theme }) => theme.Colors.grey};
    }
  }

`