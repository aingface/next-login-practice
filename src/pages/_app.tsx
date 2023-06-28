import 'styles/global.scss';
import '../../styles.css';
import 'tailwindcss/tailwind.css';

import isLoggedInStore from '@store/isLoggedInStore';
import { themes } from '@styles/themes';
import { AppProps } from 'next/app';
import { NextRouter, withRouter } from 'next/router';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

function App({ Component, pageProps, router }: AppProps) {
  const { isLoggedIn } = isLoggedInStore();

  useEffect(() => {
    if (!isLoggedIn && router.pathname === '/notice') {
      router.push('/login');
    }
  }, [isLoggedIn, router]);

  return (
    <ThemeProvider theme={themes}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default withRouter(App);
