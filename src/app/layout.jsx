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
    title: 'Aftergame | The social tabletop gaming app',
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
      </head>
      <body className="flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
