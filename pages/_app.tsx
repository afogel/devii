import Head from 'next/head';
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const App: React.FC = ({ Component, pageProps }: any) => {
  const googleAnalyticsId = ''; // e.g. 'UA-999999999-1';
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Head>
        {googleAnalyticsId && (
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          ></script>
        )}
        {googleAnalyticsId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${googleAnalyticsId}');
            `,
            }}
          ></script>
        )}
      </Head>
      <Header />
      <Component {...pageProps} />
      <div style={{ flex: 1 }} />
      <Footer />
      <style jsx global>{`
        // reset.css

        html,
        body,
        #__next {
          min-height: 100%;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default App;
