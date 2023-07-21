import { device } from '@/styles/global';
import styled, { css } from 'styled-components';

export type ButtonVariant = 'add' | 'addProduct' | 'login' | 'sendMessage' | 'showConsoles';

const buttonVariants = {
  add: {
    height: '51px',
    width: '100%'
  },
  addProduct: {
    height: '40px',
    width: '151px'
  },
  login: {
    height: '40px',
    width: '109px'
  },
  sendMessage: {
    height: '40px',
    width: '151px'
  },
  showConsoles: {
    height: '51px',
    width: '130px'
  }
}

const buttonVariantsDesktop = {
  add: {
    height: '51px',
    width: '100%'
  },
  addProduct: {
    height: '40px',
    width: '151px'
  },
  login: {
    height: '62px',
    width: '423px'
  },
  sendMessage: {
    height: '51px',
    width: '165px'
  },
  showConsoles: {
    height: '51px',
    width: '130px'
  }
}

interface PrimaryButtonProps {
  variant: ButtonVariant;
}

export const PrimaryButtonContainer = styled.span<PrimaryButtonProps>`
  .botaoPrimario{
    background-color: var(--botao-primario);
    border: none;
    color: white;
    cursor: pointer;
    font-size: .875rem;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
  }

  .botaoPrimario:hover {
    background-color: var(--botao-primario-hover);
  }

  ${({ variant }) => css`
    ${buttonVariants[variant]};
  `}

  @media ${device.desktop} {
    ${({ variant }) => css`
      ${buttonVariantsDesktop[variant]};
    `}
  }
`