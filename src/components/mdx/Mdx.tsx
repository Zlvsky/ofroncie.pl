import { memo, ReactNode } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import slugify from "slugify";
import cn from "classnames";
import PageHeader from "../text/PageHeader";
import { Heading } from "../text/Heading";
import Image from "next/image";
import { getPostsByCategory } from "../../lib/posts";
import { Post } from "@/types/Posts";

// @ts-ignore
// const Share = dynamic(() => import("./share/Share").then((c) => c.Share), {
//   ssr: false,
// });

// // @ts-ignore
// const Edit = dynamic(() => import("./edit/Edit").then((c) => c.Edit), {
//   ssr: false,
// });

type MdxProps = {
  readonly frontmatter: any;
  readonly children: ReactNode;
  readonly recommendedPosts: {
    posts: Post[];
    containsMultiplePostsInCategory: boolean;
  };
};

export const Mdx = memo<MdxProps>(
  ({ frontmatter, children, recommendedPosts }) => {
    const { title, image } = frontmatter;

    return (
      <article className="">
        <header className="" id="main">
          <Link
            href={`/kategorie/${slugify(frontmatter.category, {
              lower: true,
            })}`}
          >
            <span className={cn("", "categoryLink")}>
              <span className="visually-hidden">Kategoria:</span>
              <span>{frontmatter.category}</span>
            </span>
          </Link>
          <PageHeader
            beforeContent={frontmatter.category}
          >
            {title}
          </PageHeader>
          <div className="">
            <Image width={1200} height={628} src={image} alt="" />
          </div>
          {/* <Info frontmatter={frontmatter} /> */}
        </header>
        <section
          aria-label="Rekomendowane artykuły, udostępnij i feedback"
          className={cn("", "content")}
        >
          {children}
          {/* <Share /> */}
          {/* <Edit /> */}
        </section>
      </article>
    );
  }
);

Mdx.displayName = "Mdx";
