import styled from 'styled-components';

export const Item = styled.button`
  border: none;
  background: none;
  color: inherit;
  font: inherit;
  outline: inherit;
  padding: 0;

  cursor: pointer;
  display: inline-block;
  font-size: 3rem;
  font-weight: 300;
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  text-transform: uppercase;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    ${({ theme }) => theme.white} 50%
  );

  background-size: 230%;
  transition: all 0.4s;

  & > span {
    margin-right: 1.5rem;
    display: inline-block;
  }

  &:hover,
  &:active,
  &:focus {
    background-position: 100%;
    color: ${({ theme }) => theme.primaryDark};
    transform: translateX(2rem);
  }

  ${({ theme: { media } }) => media.smallest} {
    font-size 2.4rem;
  }
`;

export const ItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
`;

export const List = styled.ul`
  list-style: none;
  text-align: center;
  width: 100%;
`;

export const Overlay = styled.div<{ visible: boolean }>`
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  position: fixed;
  top: -6.5rem;
  right: -6.5rem;
  background-image: radial-gradient(
    ${({ theme }) => theme.tertiaryLight},
    ${({ theme }) => theme.tertiaryDark}
  );
  z-index: 100;
  transition: transform 0.6s cubic-bezier(0.86, 0, 0.07, 1);

  transform: ${({ visible }) => (visible ? 'scale(80)' : 'initial')};
`;

export const Section = styled.section<{ visible: boolean }>`
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 105;

  opacity: 0;
  width: 0;
  visibility: hidden;
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  display: flex;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;

  color: black;

  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  width: ${({ visible }) => (visible ? '100%' : 'inherit')};
`;
