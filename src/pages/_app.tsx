import 'styles/global.scss';
import '../../styles.css';
import 'tailwindcss/tailwind.css';

import { themes } from '@styles/themes';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
