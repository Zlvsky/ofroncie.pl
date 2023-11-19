import PageWrap from "@/components/layout/PageWrap";
import MainPagePosts from "@/components/main-page/MainPagePosts";
import MainSection from "@/components/main-page/MainSection";
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
        <MainSection />
        <MainPagePosts />
      </PageWrap>
    </>
  );
}
