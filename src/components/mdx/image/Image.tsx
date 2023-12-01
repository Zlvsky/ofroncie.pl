/* eslint-disable @next/next/no-img-element */
import { memo } from "react";

type ImageProps = {
  readonly src: string;
  readonly alt: string;
  readonly width?: string | number;
  readonly height?: string | number;
};

export const Image = memo(
  ({ src, alt, width = "100%", height }: ImageProps) => {
    return (
      <div className="w-auto h-auto my-12 relative flex items-center content-center">
        <img
          className="max-w-full md:rounded-lg"
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }
);

Image.displayName = "Image";
