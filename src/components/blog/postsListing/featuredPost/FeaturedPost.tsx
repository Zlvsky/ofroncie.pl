import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import { polishPlurals } from 'polish-plurals';
import React from 'react';

type FeaturedPostProps = {
  path: LinkProps["href"];
  heading: string;
  excerpt: string;
//   tag?: Heading;
  image: string;
  category: string;
  timeToRead: number;
  variant?: "LIGHT" | "DARK";
};

function FeaturedPost({ path, image, heading, excerpt, category, timeToRead, variant = "DARK" }: FeaturedPostProps) {
  const formattedReadingTime = polishPlurals('minuta', 'minuty', 'minut', Math.round(timeToRead));
  return (
    <article
      className={`w-full  rounded-3xl px-5 py-6 border-[6px]  ${
        variant === "LIGHT"
          ? "bg-white border-primary/30 text-black"
          : "bg-secondary border-primary/30 text-white"
      }`}
    >
      <Link
        href={path}
        className='className="w-full flex flex-col md:flex-row gap-10'
      >
        <div className="md:w-2/5">
          <Image
            className=""
            src={image}
            alt={heading}
            width={620}
            height={310}
          />
        </div>
        <div className="flex flex-col justify-between gap-3 md:w-3/5">
          <div>
            <h2 className="text-xl font-semibold mb-4">{heading}</h2>
            <p className="text-lg font-medium">{excerpt}</p>
          </div>
          <div className="flex flex-row justify-between items-center border-t-[4px] pt-5 border-lightBg">
            <span className="uppercase rounded-[40px] bg-primary font-medium px-3 py-1 text-white">
              {category}
            </span>
            <span className="text-right font-medium">
              {Math.round(timeToRead)} {formattedReadingTime} czytania
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default FeaturedPost;