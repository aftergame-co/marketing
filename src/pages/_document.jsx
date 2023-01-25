import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html className="h-full bg-gray-50 antialiased" lang="en">
      <Head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-C15BKR7SR5"  strategy="afterInteractive"></Script>
        <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-C15BKR7SR5');
        `}
        </Script>
      </Head>
      <body className="flex flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
