// _app.js
import Head from "next/head";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Brandsmashers Tech</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "Corporation",
              "name": "Brandsmashers Tech",
              "url": "https://www.brandsmashers.com/",
              "logo": "https://www.brandsmashers.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBrandsmashersLogo.00f5f78e.png&w=64&q=75",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "7000863918",
                "contactType": "technical support",
                "contactOption": "TollFree",
                "areaServed": "IN",
                "availableLanguage": "en"
              },
              "sameAs": [
                "https://www.instagram.com/brandsmashers_technologies/",
                "https://in.linkedin.com/company/brandsmashers-tech-pvt-ltd"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "15"
              }
            }
            `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
