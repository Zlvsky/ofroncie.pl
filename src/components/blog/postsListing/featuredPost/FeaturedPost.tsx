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
};

function FeaturedPost({ path, image, heading, excerpt, category, timeToRead }: FeaturedPostProps) {
  const formattedReadingTime = polishPlurals('minuta', 'minuty', 'minut', Math.round(timeToRead));
  return (
    <article className="w-full bg-white rounded-3xl px-5 py-6 border-[6px] border-lightGrey">
      <Link href={path}>
        <a className="w-full flex flex-row gap-10">
          <div>
            <Image className="" src={image} alt={heading} />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl">{heading}</h2>
            <p className="text-lg">{excerpt}</p>
            <div className="flex flex-row justify-between items-center border-t-[4px] border-lightBg">
              <span className="uppercase rounded-[40px] bg-primary font-bold">
                {category}
              </span>
              <span className="text-black ">
                {formattedReadingTime} czytania
              </span>
            </div>
          </div>
        </a>
      </Link>
    </article>
  );
}

export default FeaturedPost;