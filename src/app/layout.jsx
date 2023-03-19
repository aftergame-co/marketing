import '@/styles/tailwind.css';
import '@/styles/global.css';
import 'focus-visible';
import Script from 'next/script';
import { Footer } from '@/sections/Footer';
import { Header } from '@/sections/Header';
import Providers from '../utils/providers';


export const metadata = {
  title: {
    default: 'Goodgame Data - Play tracking and statistics, reimagined',
    template: '%s | Goodgame Data',
  },
  description: 'Track the board games, sports, and video games you love on Goodgame to gain meaningful insights and share your gaming journey with friends.',
  openGraph: {
    title: {
      default: 'Goodgame Data - Play tracking and statistics, reimagined',
      template: '%s | Goodgame Data',
    },
    description: 'Track the board games, sports, and video games you love on Goodgame to gain meaningful insights and share your gaming journey with friends.',
    url: 'https://www.goodgamedata.com',
    siteName: 'Goodgame Data',
    images: [
      {
        url: 'https://www.goodgamedata.com/_next/image?url=/images/gg-thumbnail.png&w=1200&q=75',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html className="h-full bg-gray-50 antialiased" lang="en">
      <head>
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
        <Providers>{children}</Providers>
        <Footer />
        {/* <!-- Start of HubSpot Embed Code --> */}
          {/* <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/23499985.js"></script> */}
        {/* <!-- End of HubSpot Embed Code --> */}
      </body>
    </html>
  )
}
