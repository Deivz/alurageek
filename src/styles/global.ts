import { createGlobalStyle } from "styled-components";

export const breakPoint = {
  mobileS: '20rem',
  mobileM: '23.438rem',
  mobileL: '26.563rem',
  tablet: '48rem',
  laptop: '81.25rem',
  desktop: '90rem'
}

export const device = {
  mobileS: `(min-width: ${breakPoint.mobileS})`,
  mobileM: `(min-width: ${breakPoint.mobileM})`,
  mobileL: `(min-width: ${breakPoint.mobileL})`,
  tablet: `(min-width: ${breakPoint.tablet})`,
  laptop: `(min-width: ${breakPoint.laptop})`,
  desktop: `(min-width: ${breakPoint.desktop})`
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    color: ${({ theme }) => theme["color-grayish-blue"]};
    margin: 0;
    font-family: ${({ theme }) => theme["font-family"]};
    padding: 0;
  }

  html {
    height: 100%;
    width: 100%;
  }

  body{
    background-color: ${({ theme }) => theme["body-bg-color"]};
    color: var(--texto-padrao);
    font-family: var(--fonte);
    height: 100%;
  }

  main{
    flex-grow: 1;
  }

  h2{
    color:  ${({ theme }) => theme["color-blue-sky"]};
    font-size: 2.5rem;
  }

  h3{
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme["font-weight-semi-bold"]};
  }
  
  strong{
    font-weight: ${({ theme }) => theme["font-weight-extra-bold"]};
  }
  
  h4{
    font-size: .6875rem;
    font-weight: ${({ theme }) => theme["font-weight-medium"]};
  }

  h5{
    font-size: .625rem;
    font-weight: ${({ theme }) => theme["font-weight-semi-bold"]};
  }

  @media ${device.laptop} {
    h2{
      font-size: 3.5rem;
    }

    h3{
      font-size: 2rem;
    }

    h4{
      font-size: .875rem;
    }

    h5{
      font-size: .75rem;
    }
  }
`;