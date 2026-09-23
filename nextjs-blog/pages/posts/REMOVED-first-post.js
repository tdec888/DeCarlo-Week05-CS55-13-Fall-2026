// Import the document head component for setting page metadata.
import Head from 'next/head';
// Import the Next.js link component for client-side navigation.
import Link from 'next/link';
// Import the shared page layout wrapper.
import Layout from '../components/layout';
// Import the Script component for loading an external JavaScript SDK.
import Script from 'next/script';
 
// Define the post page component for the server-side development article.
export default function FirstPost() {
  return (
    
    <>

      <body className={`maintainBackLtBlue backLtBlue ` }>
      <Head>
        <title>Server Side Development</title>
         <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      </Head>


        <section className={`dropShadow maintainForeWhite dropShadow maintainDropShadow`}>


        
      <h1>Server Side Development</h1>
      <h2> Controlling, manipulating and displaying server-side data </h2>
      <h3>allows for </h3>
      <h4> a more secure interaction and a more meaningful experience for all end users.</h4>

      
      </section>
      </body>


    </>


  );
}