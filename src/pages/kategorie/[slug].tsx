import { NextSeo } from "next-seo";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import slugify from "slugify";
import { getPostsByCategory, getAllPosts } from "../../lib/posts";
import Header from "@/components/header/Header";
import PageWrap from "@/components/layout/PageWrap";
import BigContainer from "@/components/layout/BigContainer";
import { Categories } from "@/components/categories/Categories";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postsByCategories = await getPostsByCategory(params!.slug as string);
  const posts = getAllPosts();

  return {
    props: {
      postsByCategories,
      posts,
    },
  };
};

export const getStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map(({ category }) => ({
    params: { slug: slugify(category, { lower: true }) },
  }));

  return {
    paths,
    fallback: false,
  };
};

const CategoryPage = ({
  posts,
  postsByCategories,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {
    query: { slug },
  } = useRouter();
  const category = postsByCategories[0].category;
  const title = `oFroncie.pl - ${category}`;
  const description = `Artykuły w kategorii ${title}`;
  const url = `https://ofroncie.pl/kategorie/${slug}`;
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
          //   images: [
          //     {
          //       url: categoryImage,
          //       alt: title,
          //       width: 1200,
          //       height: 628,
          //     },
          //   ],
        }}
      />
      <Header />
      <PageWrap>
        <BigContainer>
          <Categories posts={postsByCategories} category={category} />
        </BigContainer>
      </PageWrap>
    </>
  );
};

export default CategoryPage;
