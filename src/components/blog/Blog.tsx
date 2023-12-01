import { memo } from "react";
import cn from "classnames";

import Header from "../header/Header";
import { Category, Post } from "@/types/Posts";
// import { CategoriesList } from "../category/categoriesList/CategoriesList";
import FeaturedPost from "./postsListing/featuredPost/FeaturedPost";
import PageHeader from "../text/PageHeader";
import CategoriesList from "./categories/CategoriesList";
import PostsListing from "./postsListing/postLists/PostsListing";

type BlogProps = {
  readonly posts: Post[];
  readonly categories: Category[];
};

export const Blog = memo<BlogProps>(({ posts }) => {
  const { title, excerpt, category, image, slug, timeToRead } = posts[0];
  const [, ...postsWithoutFirst] = posts;
  return (
    <main id="main">
      <PageHeader>Artykuły</PageHeader>
      <CategoriesList />
      <section>
        <FeaturedPost
          key={title}
          path={`/blog/${slug}`}
          heading={title}
          excerpt={excerpt}
          category={category}
          image={image}
          timeToRead={timeToRead}
        />
        <PostsListing posts={posts} />
      </section>
    </main>
  );
});

Blog.displayName = "Blog";
