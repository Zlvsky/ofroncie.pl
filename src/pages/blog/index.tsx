import { getAllPosts } from "../../lib/posts";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import { categoriesArr } from "../../data/categories";
import PageWrap from "@/components/layout/PageWrap";
import { Blog } from "@/components/blog/Blog";
import BigContainer from "@/components/layout/BigContainer";
import Header from "@/components/header/Header";

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
};

const title = "oFroncie.pl - Blog";
const description = "Artykuły o front-endzie i nie tylko!";
const url = "https://ofroncie.pl/blog";
// const imageThumbnail = "/images/blog.png";

export default function BlogPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          // images: [
          //   {
          //     url: imageThumbnail,
          //     alt: title,
          //     width: 1200,
          //     height: 628,
          //   },
          // ],
        }}
      />
      <Header />
      <PageWrap>
        <BigContainer>
          <Blog posts={posts} categories={categoriesArr} />
        </BigContainer>
      </PageWrap>
    </>
  );
}
