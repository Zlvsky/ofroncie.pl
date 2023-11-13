import PageWrap from "@/components/layout/PageWrap";
import { GetStaticProps, InferGetStaticPropsType } from "next";
// import { getNewestPosts, getAllPosts } from "../lib/posts";
import { NextSeo } from "next-seo";


// export const getStaticProps: GetStaticProps = async () => {
//   const newestPosts = getNewestPosts();
//   const posts = getAllPosts();

//   return {
//     props: {
//       newestPosts,
//       posts,
//     },
//   };
// };

export default function Index() {
  return (
    <>
      <NextSeo />
      <main id="main" className="mainWrapper"></main>
      <PageWrap>
        <h1 style={{color: "white"}}>oFroncie.pl</h1>
      </PageWrap>
    </>
  );
}