// Import the shared layout wrapper so each post page uses the same site shell.
import Layout from './../components/layout';
// Import the JSON-based post helper functions for the dynamic post routes.
import { getAllPostIds, getPostData } from '../../lib/posts-json';
// Keep an old import line commented out for reference during earlier markdown-based setup.
//import { getAllPostIds, getPostData } from '../../lib/posts';

// Import the page head component so the browser tab can display post metadata.
import Head from 'next/head';
// Import the reusable date formatter for readable dates on the post page.
import Date from '../../components/date';
// Import the CSS module used by this post page.
import utilStyles from '../utils.module.css';

// Export the Post page component that renders the contents for a selected blog item.
export default function Post({ postData }) {
  // Return the post layout with the title, date, html content, and id values.
  return (
    // Wrap the content in the shared site layout.
    <Layout>

      Title: {postData.title}

      <br />

      Date: {postData.date}
      

      <br />

      Content: {postData.contentHtml}

      <br />

      Gift Idea: {postData.giftIdea}

      <br />

      Card ID: {postData.id}
    </Layout>
  );
}

// Export a function that creates the list of valid post route paths for static generation.
export async function getStaticPaths() {
  // Read all of the JSON post ids and build the dynamic route path list.
  const paths = getAllPostIds();
  // Keep the previous markdown-based note in comments for reference while the project uses JSON data.
  // const paths = getAllPostIds(); gets md posts
  // Return the paths list so Next.js knows which post pages to render.
  return {
    paths,
    fallback: false,
  };
}

// Export the page getter that loads the data for a selected post from the JSON file.
export async function getStaticProps({ params }) {
  // Find the matching post object for the route parameter id.
  const postData = getPostData(params.id);
  // Log the selected post in development for debugging.
  console.log(postData);
  // Return the post data inside props so the page can render it.
  return {
    props: {
      // Pass the selected post object to the Post component as a prop.
      postData,
    },
  };
}