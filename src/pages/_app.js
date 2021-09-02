import { createGlobalStyle, ThemeProvider } from 'styled-components'
import '@fontsource/inter/900.css'
import '@fontsource/inter/800.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/400.css'

const THEME = 'light'

const theme = {
  colors: {
    black: '#0c0a09',
    gray: '#7e7f83',
    cultured: '#f3f3f4',
    ruby: '#982649',
    red: '#f71735',
    white: '#ffffff'
  },
}

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter;
    font-style: normal;
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, p {
    color: ${THEME === 'light' ? theme.colors.black : theme.colors.white};
  }

  h1 {
    font-style: italic;
    font-weight: bold;
    font-size: 48px;
    line-height: 58px;
  }

  h2 {
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
  }

  h3 {
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
  }

  h4 {
    font-weight: 600;
    font-size: 26px;
    line-height: 31px;
  }

  h5 {
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
  }
  
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
  }
`



function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp

