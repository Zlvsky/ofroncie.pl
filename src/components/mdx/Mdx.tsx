import { memo, ReactNode } from "react";
import Link from "next/link";
import slugify from "slugify";
import Image from "next/image";
import { Post } from "@/types/Posts";
import { polishPlurals } from "polish-plurals";

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
    const { title, image, readingTime, category, publishedAt } = frontmatter;
    console.log(frontmatter);
    const formattedReadingTime = polishPlurals(
      "minuta",
      "minuty",
      "minut",
      Math.round(readingTime)
    );

    return (
      <article className="max-w-4xl mx-auto text-white mt-10">
        <header className="" id="main">
          <h1 className="text-4xl font-semibold">{title}</h1>
          <div className="flex flex-row items-center gap-2 mt-5">
            <Link
              href={`/kategorie/${slugify(frontmatter.category, {
                lower: true,
              })}`}
            >
              <span className="uppercase rounded-[40px] bg-primary font-medium px-3 py-1 text-white">
                {category}
              </span>
            </Link>
            <span>·</span>
            <span className="font-medium">
              {Math.round(readingTime)} {formattedReadingTime} czytania
            </span>
            <span>·</span>
            <span className="font-medium">{publishedAt}</span>
          </div>
          <div className="my-10">
            <Image width={900} height={450} src={image} alt={title} />
          </div>
          {/* <Info frontmatter={frontmatter} /> */}
        </header>
        <section
          aria-label="Rekomendowane artykuły, udostępnij i feedback"
          className="article w-full md:text-lg xl:text-xl whitespace-pre-wrap"
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
