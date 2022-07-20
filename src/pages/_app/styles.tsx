import styled from 'styled-components';

export const Footer = styled.footer`
  padding: 2rem;
  color: ${(props) => props.theme.white};
`;

export const Header = styled.header`
  color: ${({ theme }) => theme.white};
  display: flex;
  padding: 1.5rem;
  font-size: 3.5rem;
  font-weight: bold;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.main`
  color: ${({ theme }) => theme.white};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  ${({ theme: { media } }) => media.extra} {
    justify-content: space-evenly;
  }
`;
