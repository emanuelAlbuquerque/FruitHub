import styled, { keyframes } from "styled-components";
import { chooseTypography } from "Utils/chooseTypography";

interface IStatus {
  variations: 'accepted' | 'error' | 'processing' | 'delivery'
}

export const ContainerStyleStatus = styled.div<IStatus>`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  .status_info{
    display: flex;
    align-items: center;
    gap: 2rem;

    img{
      width: 6.5rem;
      height: 6.5rem;
    }

    p{
      ${({ theme }) => chooseTypography(theme.Typography.TextRegular)}
      color: ${({ theme }) => theme.Colors.greyDark};
    }
  }

  .status_checked{
    display: flex;
    align-items: center;
    justify-content: center;


    background-color: ${({ variations, theme }) => {
    if (variations === 'accepted') {
      return theme.Colors.green
    }
    if (variations === 'error') {
      return theme.Colors.red
    }
  }};
    
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  .status_delivery{
    width: 40px; 
    height: 40px; 
    border-radius: 50%;

    background: ${({ theme }) => theme.Colors.orange};

    border: none;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Baunce = keyframes`
    to{
      transform: translateY(-15px) scaleX(1.1);
    }
`

export const Processing = styled.div`
  width: 32px;
  height: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .ball{
    width: 8px;
    height: 100%;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.Colors.orange};
  }
`

export const AnimationProcessing = styled(Processing)`
  animation: ${Baunce} .5s alternate infinite;
`