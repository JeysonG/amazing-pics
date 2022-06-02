import { createGlobalStyle } from 'styled-components';
import { ThemeType } from '../App';

interface Props {
  theme: ThemeType;
}

export const GlobalStyle = createGlobalStyle<Props>`
  body {
    background: ${({ theme }): string => theme.background};
    color: ${({ theme }): string => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }

  div.page {
    display: flex;
    justify-content: right;
    align-items: right;
    height: 100vh;
    padding: 1em;
  }
  `;
