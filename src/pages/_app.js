import { createGlobalStyle, ThemeProvider } from 'styled-components'
import '@fontsource/inter/900.css'
import '@fontsource/inter/800.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/400.css'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

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

