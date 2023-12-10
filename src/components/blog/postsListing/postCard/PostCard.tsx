import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { polishPlurals } from "polish-plurals";
import React from "react";

type FeaturedPostProps = {
  path: LinkProps["href"];
  heading: string;
  //   tag?: Heading;
  image: string;
  category: string;
  excerpt: string;
  timeToRead: number;
  variant?: "LIGHT" | "DARK";
};

function PostCard({
  path,
  image,
  heading,
  category,
  excerpt,
  timeToRead,
  variant = "DARK",
}: FeaturedPostProps) {
  const formattedReadingTime = polishPlurals(
    "minuta",
    "minuty",
    "minut",
    Math.round(timeToRead)
  );
  return (
    <article
      className={`w-full rounded-3xl px-5 py-6 border-[6px]  ${
        variant === "LIGHT"
          ? "bg-white border-lightGrey text-black"
          : "bg-secondary border-primary/30 text-white"
      }`}
    >
      <Link
        href={path}
        className='className="w-full flex flex-col justify-between gap-10  min-h-[400px]'
      >
        <div className="flex flex-col gap-3">
          <Image
            className="rounded-2xl"
            src={image}
            alt={heading}
            width={620}
            height={310}
            quality={100}
          />

          <h3 className="text-xl font-semibold text-left mt-4">{heading}</h3>
          <p className="text-medium font-medium text-left mt-4">{excerpt}</p>
        </div>
        <div className="flex flex-row justify-between items-center border-t-[4px] pt-5 border-lightBg">
          <span className="uppercase rounded-[40px] bg-primary font-medium px-3 py-1 text-white">
            {category}
          </span>
          <span className="text-right font-medium">
            {Math.round(timeToRead)} {formattedReadingTime} czytania
          </span>
        </div>
      </Link>
    </article>
  );
}

export default PostCard;
