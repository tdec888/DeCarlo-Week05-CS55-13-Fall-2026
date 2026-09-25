// Import the Next.js link component to create client-side navigation links for each post.
import Link from 'next/link';
// Import the reusable date formatter so publication dates can be displayed in a readable format.
import Date from '../components/date';

// Import the page head component for setting the browser tab title and metadata.
import Head from 'next/head';
// Import the shared page layout and the site title constant used by the homepage header.
import Layout, { siteTitle } from './components/layout';
// Import the CSS module that contains the homepage styles used by this screen.
import utilStyles from './utils.module.css';

// Import the helper that reads the JSON data and returns blog metadata for the homepage.
import { getSortedPostsData } from '../lib/posts-json';

// Export a static page prop function so Next.js can preload the blog entries before rendering.
export async function getStaticProps() {
  // Call the JSON data helper to fetch all post metadata for the homepage list.
  const allPostsData = getSortedPostsData();
  // Return the data object that will be passed into the Home component as props.
  return {
    props: {
      // Provide the blog post list to the homepage React component.
      allPostsData,
    },
  };
}

// Export the Home page component that renders the landing page and blog summary list.
export default function Home({ allPostsData }) {
  // Return the page structure, including the site layout and content sections.
  return (
    // Wrap the page in the shared site layout and mark this as the home page header.
    <Layout home>

      <Head>

        <title>{siteTitle}</title>
      </Head>
      

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