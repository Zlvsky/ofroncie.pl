import { ReactNode, useEffect, DetailedHTMLProps, HTMLAttributes } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { NextSeo, ArticleJsonLd } from "next-seo";
import { MDXRemote } from "next-mdx-remote";
import {
  getPostBySlug,
  getPostsPaths,
  getAllPosts,
  getRecommendedPosts,
} from "../../lib/posts";
import { useCallback, useMemo } from "react";
import { Heading } from "@/components/text/Heading";
import PageWrap from "@/components/layout/PageWrap";
import BigContainer from "@/components/layout/BigContainer";
import Header from "@/components/header/Header";
import { Image } from "@/components/mdx/image/Image";
import getFormattedDate from "@/utils/getFormattedDate";
import { Mdx } from "@/components/mdx/Mdx";
import AboutInfo from "@/components/common/AboutInfo";
import { Code } from "@/components/mdx/code/Code";

type ComponentProps = {
  readonly children: ReactNode;
};

type HeadingComponentProps = {
  readonly children: string;
};

type ImageProps = {
  readonly src: string;
  readonly alt: string;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params!.slug as string;
  const { transformedMdx, frontmatter } = await getPostBySlug(slug);
  const posts = getAllPosts();
  const recommendedPosts = getRecommendedPosts(frontmatter);

  return {
    props: {
      posts,
      recommendedPosts,
      transformedMdx,
      frontmatter: {
        slug,
        ...frontmatter,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getPostsPaths();

  return {
    paths,
    fallback: false,
  };
};

const BlogPost = ({
  transformedMdx,
  frontmatter,
  posts,
  recommendedPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { title, excerpt, publishedAt, slug, image } = frontmatter;
  const url = `https://ofroncie.pl/blog/${slug}`;
  const articleImage = `https://ofroncie.pl${image}`;
  const getHeadingProps = useCallback(({ children }: HeadingComponentProps) => {
    return {
      slug: children,
      url,
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const customMdxComponents = useMemo(
    () => ({
      pre: (
        props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>
      ) => {
        return <Code {...props} />;
      },
      h2: (props: HeadingComponentProps) => (
        <Heading headingTag="h2" {...getHeadingProps(props)}></Heading>
      ),
      h3: (props: HeadingComponentProps) => (
        <Heading headingTag="h3" {...getHeadingProps(props)}></Heading>
      ),
      h4: (props: HeadingComponentProps) => (
        <Heading headingTag="h4" {...getHeadingProps(props)}></Heading>
      ),
      h5: (props: HeadingComponentProps) => (
        <Heading headingTag="h5" {...getHeadingProps(props)}></Heading>
      ),
      h6: (props: HeadingComponentProps) => (
        <Heading headingTag="h6" {...getHeadingProps(props)}></Heading>
      ),
      img: ({ alt, src }: ImageProps) => (
        <Image src={src} alt={alt ? alt : ""} />
      ),
    //   Sparkles,
      Image,
    //   Highlight,
    //   Newsletter,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <>
      <NextSeo
        title={`${title} - oFroncie.pl`}
        description={excerpt}
        canonical={url}
        openGraph={{
          type: "article",
          article: {
            publishedTime: getFormattedDate(publishedAt),
          },
          url,
          title,
          description: excerpt,
          images: [
            {
              url: articleImage,
              alt: title,
              width: 1200,
              height: 628,
            },
          ],
        }}
      />
      <ArticleJsonLd
        authorName="Krzysztof Zaleski"
        dateModified={getFormattedDate(publishedAt)}
        datePublished={getFormattedDate(publishedAt)}
        description={excerpt}
        // publisherLogo="/favicons/android-chrome-192x192.png"
        publisherName="Krzysztof Zaleski"
        images={[articleImage]}
        title={title}
        url={url}
      />
      <Header />
      <PageWrap>
        <BigContainer>
          <main>
            <Mdx recommendedPosts={recommendedPosts} frontmatter={frontmatter}>
              <MDXRemote {...transformedMdx} components={customMdxComponents} />
            </Mdx>
          </main>
          <div className="max-w-4xl mx-auto w-full border border-lightGrey/30 my-14"></div>
          <AboutInfo />
        </BigContainer>
      </PageWrap>
    </>
  );
};

export default BlogPost;
