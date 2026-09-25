import Layout from './../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts-json';
//import { getAllPostIds, getPostData } from '../../lib/posts';

import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../utils.module.css';

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.date}
      
      <br />
      {postData.contentHtml}
      <br />
      {postData.id}
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  // const paths = getAllPostIds(); gets md posts
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  console.log(postData);
  return {
    props: {
      postData,
    },
  };
}