import { memo } from "react";
import classnames from "classnames";
import slugify from "slugify";

type HeadingProps = {
  readonly slug: string;
  readonly headingTag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  readonly url: string;
};

export const Heading = memo(({ headingTag: Tag, slug, url }: HeadingProps) => {
  const id = slugify(slug, { lower: true });

  return (
    <Tag id={id} className={classnames("text-primary my-4 relative")}>
      <a id={id} href={`${url}/#${id}`} aria-hidden="true" tabIndex={-1}>
        {/* {slug} */}
        <span></span>
      </a>
      {slug}
    </Tag>
  );
});

Heading.displayName = "Heading";
