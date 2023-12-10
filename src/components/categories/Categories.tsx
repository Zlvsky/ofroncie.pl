import { memo } from "react";

import { Post } from "@/types/Posts";
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
