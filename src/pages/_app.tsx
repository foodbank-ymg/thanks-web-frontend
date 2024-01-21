import { useRouter } from 'next/router'
import Script from 'next/script'
import { useEffect } from 'react'

import type { AppProps } from 'next/app'

import usePageView from '@/hooks/usePageView'
import Layout from '@/layout/Layout'
import '@/styles/globals.css'
import { GA_MEASUREMENT_ID } from '@/lib/gtag'

export default function App({ Component, pageProps }: AppProps) {
  usePageView()

  return (
    <Layout>
      <>
        <Script
          strategy='afterInteractive'
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id='gtag-init'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <Component {...pageProps} />
      </>
    </Layout>
  )
}
