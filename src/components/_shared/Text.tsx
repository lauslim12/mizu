import styled from 'styled-components';

export const Text = styled.p<{
  $size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  $visibleOnOverlay?: boolean;
}>`
  ${({ $size }) => {
    if ($size === 'xs') {
      return 'font-size: 1rem;';
    }

    if ($size === 'sm') {
      return 'font-size: 1.6rem;';
    }

    if ($size === 'lg') {
      return 'font-size: 7.2rem;';
    }

    if ($size === 'xl') {
      return 'font-size: 16rem;';
    }

    if ($size === 'xxl') {
      return 'font-size: 24rem;';
    }

    if ($size === 'xxxl') {
      return 'font-size: 48rem;';
    }

    return 'font-size: 3.6rem;';
  }}

  z-index: ${({ $visibleOnOverlay }) => ($visibleOnOverlay ? 105 : 'auto')};
`;
