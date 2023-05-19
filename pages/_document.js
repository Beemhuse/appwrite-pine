import { Html, Head, Main, NextScript } from 'next/document'
import loader from '@/loader';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <style>
                        {loader}
                    </style>
      </Head>
      <body>
      <div id={'globalLoader'}>
                     <div className="loader">
                        <div/>
                        <div/>
                    </div>
                </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
