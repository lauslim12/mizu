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

  & > p {
    ${({ theme: { media } }) => media.largest} {
      font-size: 30rem;
    }

    ${({ theme: { media } }) => media.medium} {
      font-size: 20rem;
    }

    ${({ theme: { media } }) => media.small} {
      font-size: 12rem;
    }

    ${({ theme: { media } }) => media.smallest} {
      font-size: 10rem;
    }
  }
`;

export const Dynamic = styled.div`
  margin-top: -8rem;

  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  ${({ theme: { media } }) => media.largest} {
    margin-top: 0;
  }

  & > p:first-child {
    ${({ theme: { media } }) => media.largest} {
      font-size: 7.2rem;
    }

    ${({ theme: { media } }) => media.extra} {
      font-size: 3.6rem;
    }

    ${({ theme: { media } }) => media.small} {
      font-size: 1.6rem;
    }
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
