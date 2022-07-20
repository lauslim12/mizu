import styled from 'styled-components';

export const Buttons = styled.section`
  margin-bottom: 10rem;

  ${({ theme: { media } }) => media.largest} {
    margin-bottom: 0;
    margin-top: 3rem;
  }
`;

export const Counter = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Description = styled.p`
  ${({ theme: { media } }) => media.ultra} {
    font-size: 7.2rem;
  }

  ${({ theme: { media } }) => media.hd} {
    font-size: 4.2rem;
  }

  ${({ theme: { media } }) => media.extra} {
    font-size: 3.6rem;
  }

  ${({ theme: { media } }) => media.small} {
    font-size: 2.8rem;
  }
`;

export const Dynamic = styled.div`
  margin-top: -7rem;

  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  ${({ theme: { media } }) => media.medium} {
    margin-top: 0;
  }
`;

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

export const Information = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
`;

export const Number = styled.p`
  ${({ theme: { media } }) => media.ultra} {
    font-size: 42rem;
  }

  ${({ theme: { media } }) => media.hd} {
    font-size: 30rem;
  }

  ${({ theme: { media } }) => media.medium} {
    font-size: 24rem;
  }

  ${({ theme: { media } }) => media.small} {
    font-size: 16rem;
  }
`;

export const Percentage = styled.p`
  ${({ theme: { media } }) => media.ultra} {
    font-size: 5.2rem;
  }

  ${({ theme: { media } }) => media.hd} {
    font-size: 4.2rem;
  }

  ${({ theme: { media } }) => media.extra} {
    font-size: 3.6rem;
  }

  ${({ theme: { media } }) => media.small} {
    font-size: 1.6rem;
  }
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
