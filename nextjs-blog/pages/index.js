// Developer note: This file defines the blog homepage and loads post metadata for the listing.
import Link from 'next/link';
import Date from './components/date';

// Import the Next.js document head component used for page metadata.
import Head from 'next/head';
// Import the shared site layout and the site title string used in the tab title.
import Layout, { siteTitle } from './components/layout';
// Import the CSS module for homepage-specific styling.
import utilStyles from './utils.module.css';

// Developer note: This helper reads markdown files on the server and returns the post data.
import { getSortedPostsData } from '../lib/posts-json'; // this was changed to from /lib/posts.js to posts-json.js

export async function getStaticProps() {
  // Developer note: This runs during build and passes data to the page before rendering.
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// Developer note: The page component renders the landing page and the blog summary list.
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* Developer note: This outer body-like wrapper uses utility classes for background and text styling. */}
      
        <section className={`dropShadow maintainForeWhite `}>
          <section className={`${utilStyles.headingMd} foreWhite`}>
            <p>My name is Travis and I am presentlying studing web development at the Santa Rosa Junior College.</p>

            <section className={`${utilStyles.headingMd} foreBlue maintainForeBlue`}>
              <p>
                This website is the first Next.js framework that I have used and I look forward to what this stack has to offer. {' '}
                <a href="posts/first-post">Next Page </a>
              </p>
            </section>
          </section>
        </section>

        {/* Developer note: Each blog entry is mapped to a list item with a title and publish date. */}
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>

    </Layout>
  );
}