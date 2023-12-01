import { memo } from "react";
import cn from "classnames";

import Header from "../header/Header";
import { Category, Post } from "@/types/Posts";
// import { CategoriesList } from "../category/categoriesList/CategoriesList";
import PageHeader from "../text/PageHeader";
import PostsListing from "../blog/postsListing/postLists/PostsListing";

type BlogProps = {
  readonly posts: Post[];
  readonly category: string;
};

export const Categories = memo<BlogProps>(({ posts, category }) => {
  const [, ...postsWithoutFirst] = posts;
  return (
    <main id="main">
      <PageHeader>{category}</PageHeader>
      <section className="mt-32">
        <PostsListing posts={posts} />
      </section>
    </main>
  );
});

Categories.displayName = "Kategorie";
