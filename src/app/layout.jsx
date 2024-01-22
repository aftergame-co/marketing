import '@/styles/tailwind.css';
import '@/styles/global.css';
import 'focus-visible';
import Script from 'next/script';
import { Footer } from '@/sections/Footer';
import { Header } from '@/sections/Header';

export const metadata = {
  title: {
    default: 'Aftergame | Play tracking and statistics, reimagined',
    template: '%s | Aftergame',
  },
  applicationName: 'Aftergame',
  description: 'Record the tabletop games you love on Aftergame to gain meaningful insights and share your gaming journey with friends.',
  keywords: ['After game', 'tabletop game', 'board game', 'boardgames', 'boardgame', 'board', 'games', 'play logging', 'statistics', 'leaderboard'],
  metadataBase: new URL('https://www.aftergame.co'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Aftergame | Play tracking and statistics, reimagined',
    description: 'Record the tabletop games you love on Aftergame to gain meaningful insights and share your gaming journey with friends.',
    url: 'https://www.aftergame.co',
    siteName: 'Aftergame',
    images: [
      {
        url: 'https://www.aftergame.co/_next/image?url=/images/ag-thumbnail.png&w=1200&q=75',
        alt: 'Aftergame | Play tracking and statistics, reimagined',
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
      </head>
      <body className="flex flex-col">
        <Header />
        {/* <Providers>{children}</Providers> */}
        {children}
        <Footer />
        {/* <!-- Start of HubSpot Embed Code --> */}
          {/* <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/23499985.js"></script> */}
        {/* <!-- End of HubSpot Embed Code --> */}
      </body>
    </html>
  )
}
