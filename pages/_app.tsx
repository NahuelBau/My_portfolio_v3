import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { darkTheme } from '../themes'
import { UIProvider} from '../context/ui'

import '../styles/globals.css';




function MyApp({ Component, pageProps }: AppProps) {


  return (
    <UIProvider>

      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>

    </UIProvider>

  )
}

export default MyApp
