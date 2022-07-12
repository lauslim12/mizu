import styled, { keyframes } from 'styled-components';

const scaleShadow = keyframes`
  0% {
    opacity: 0;
    transform: translateY(4rem);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font: inherit;
  outline: inherit;
  padding: 0;
`;

export const DrinkButton = styled(Button)`
  &,
  &:link,
  &:visited {
    animation: ${scaleShadow} 0.5s ease-out 0.75s;
    animation-fill-mode: backwards;
    border: 1px dashed ${({ theme }) => theme.white};
    border-radius: 50%;
    position: relative;
    padding: 2rem;
    transition: all 0.2s;
  }

  &:hover,
  &:active,
  &:focus {
    background: ${({ theme }) => theme.secondaryDark};
    border: 1px solid ${({ theme }) => theme.white};
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    color: ${({ theme }) => theme.black};
    transform: translateY(-0.3rem);

    &::after {
      opacity: 0;
      transform: scaleX(1.6) scaleY(1.6);
      background-color: ${({ theme }) => theme.white};
    }
  }

  &::after {
    content: '';
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }
`;

export const SettingsButton = styled(Button)`
  &,
  &:link,
  &:visited {
    color: ${({ theme }) => theme.white};
    transition: all 0.2s ease;
    z-index: 105;
  }

  &:hover,
  &:active,
  &:focus {
    color: ${({ theme }) => theme.secondaryDark};
    font-weight: 700;
  }
`;
