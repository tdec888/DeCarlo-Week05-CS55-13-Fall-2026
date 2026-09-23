// Developer note: This component creates the shared page shell used across pages.
// It handles the site header, metadata, and navigation wrapper.
import Head from 'next/head';
import Image from 'next/image';
import styles from '../layout.module.css';
import utilStyles from '../utils.module.css';

import Link from 'next/link';
 
// Developer note: This site name appears in page titles and social metadata.
const name = 'Travis D.';
export const siteTitle = 'Next.js Sample Website';
 

//className={`backBlue maintainBackBlue`}>
// Developer note: `home` changes the layout to either the landing page header or the post page header.
export default function Layout({ children, home }) {
  return (
    <div className={styles.container} maintainbackblue > 
    <div className={`backBlue maintainBackBlue`}>
      <Head >
        {/* Developer note: These meta tags help with SEO and social sharing previews. */}
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=${encodeURIComponent(
            'https://nextjs.org/static/nextjs-logo.svg',
          )}`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            {/* Developer note: The home page shows the profile image and larger heading. */}
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={`${global.heading2Xl} txtYellow maintainTxtYellow txtDropShadow maintainTxtDrop ${utilStyles.maintainYellowTxtOverride}`}>{name}</h1>
          </>
        ) : (
          <>
            {/* Developer note: Secondary pages show the same image but smaller and linked back home. */}
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main className={`backBlue maintainBackBlue`}>{children}
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
      </main>
      </div>
    </div>
    

  );
}