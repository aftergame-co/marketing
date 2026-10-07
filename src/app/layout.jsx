/* eslint-disable @next/next/no-img-element */
import '@/styles/tailwind.css';
import '@/styles/global.css';
import 'focus-visible';
import Script from 'next/script';
import { Footer } from '@/sections/Footer';
import { Header } from '@/sections/Header';

export const metadata = {
  title: {
    default: 'Aftergame | The social tabletop gaming app',
    template: '%s | Aftergame',
  },
  applicationName: 'Aftergame',
  description: 'Gather your group, find events, plan epic game nights, create shared play logs, and easily manage your collection on Aftergame.',
  keywords: ['After game', 'tabletop game', 'board game', 'boardgames', 'boardgame', 'board', 'games', 'play logging', 'statistics', 'leaderboard'],
  metadataBase: new URL('https://www.aftergame.co'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: {
      default: 'Aftergame | The social tabletop gaming app',
      template: '%s | Aftergame',
    },
    description: 'Gather your group, find events, plan epic game nights, create shared play logs, and easily manage your collection on Aftergame.',
    url: 'https://www.aftergame.co',
    siteName: 'Aftergame',
    images: [
      {
        url: 'https://www.aftergame.co/_next/image?url=/images/ag-thumbnail-new.png&w=1200&q=75',
        alt: 'Aftergame | The social tabletop gaming app',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
};

const structuredData = {
  "@context" : "https://schema.org",
  "@type" : "WebSite",
  "name" : "Aftergame",
  "url" : "https://www.aftergame.co"
};

export default function RootLayout({ children }) {
  return (
    <html className="h-full bg-gray-50 antialiased" lang="en">
      <head>
        <meta property="fb:app_id" content="317542250869616" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

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

        {/* <!-- Meta Pixel Code --> */}
        <Script id="meta-pixel">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1329215262490101');
          fbq('track', 'PageView');
        `}
        </Script>
        <noscript>
          <img height="1" width="1" style="display:none" alt="meta pixel" src="https://www.facebook.com/tr?id=1329215262490101&ev=PageView&noscript=1" />
        </noscript>
        {/* <!-- End Meta Pixel Code --> */}
      </head>
      <body className="flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
