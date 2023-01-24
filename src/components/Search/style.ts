import styled from "styled-components"


export const ContainerSearchStyle = styled.div`

  width: 100%;

  display: flex;
  align-items: center;
  gap: .5rem;
  
  .search_input{
    flex: 1;
    padding: 1rem;
    
    display: flex;
    align-items: center;
    gap: 1rem;
    
    background-color: ${({ theme }) => theme.Colors.whiteSmoke};
    border-radius: 16px;
    
    input{
      width: 100%;
      
      border: none;
      outline: none;
      
      background-color: transparent;
      
      color: ${({ theme }) => theme.Colors.grey};
      font-size: ${({ theme }) => theme.Typography.TextSmallLarge.size};
      font-weight: ${({ theme }) => theme.Typography.TextSmallLarge.weight};
      
      &::placeholder{
        color: ${({ theme }) => theme.Colors.grey};
      }
    }
  }
  
  .search_button-filter{  
    padding: 1rem .5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    
    border: none;

    background-color: ${({ theme }) => theme.Colors.whiteSmoke};
    border-radius: 16px;
    cursor: pointer;
    
  }

` 