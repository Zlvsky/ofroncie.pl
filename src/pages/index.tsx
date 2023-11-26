import PageWrap from "@/components/layout/PageWrap";
import MainAbout from "@/components/main-page/MainAbout";
import MainPagePosts from "@/components/main-page/MainPagePosts";
import MainSection from "@/components/main-page/MainSection";
import { getNewestPosts } from "@/lib/posts";
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
export const getStaticProps: GetStaticProps = async () => {
  const newestPosts = getNewestPosts();

  return {
    props: {
      newestPosts,
    },
  };
};

export default function Index({
  newestPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(newestPosts);
  return (
    <>
      <NextSeo />
      <main id="main" className="mainWrapper"></main>
      <PageWrap>
        <MainSection />
        <MainPagePosts posts={newestPosts} />
        <MainAbout />
      </PageWrap>
    </>
  );
}
