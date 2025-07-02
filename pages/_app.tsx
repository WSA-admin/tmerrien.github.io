import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import { rstReactor } from '../app/fonts';
import '../app/globals.css';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className={rstReactor.variable}>
      <Layout>
        <AnimatePresence mode="wait" initial={false}>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </Layout>
    </div>
  );
} 