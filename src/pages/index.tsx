import Header from "@/components/header/Header";
import PageWrap from "@/components/layout/PageWrap";
import MainAbout from "@/components/main-page/MainAbout";
import MainPagePosts from "@/components/main-page/MainPagePosts";
import MainSection from "@/components/main-page/MainSection";
import { getNewestPosts } from "@/lib/posts";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";

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

  return (
    <>
      <NextSeo />
      <Header absolute/>
      <main id="main" className="mainWrapper"></main>
      <PageWrap>
        <MainSection />
        <MainPagePosts posts={newestPosts} />
        <MainAbout />
      </PageWrap>
    </>
  );
}
