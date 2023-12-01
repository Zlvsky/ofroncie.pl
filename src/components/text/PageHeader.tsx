import React from 'react';

type HeaderProps = {
  children: React.ReactNode;
  beforeContent?: string;
};

function PageHeader({ children, beforeContent }: HeaderProps) {
    return (
      <h1
        data-before-content={beforeContent || children}
        className={
          "page-header relative text-4xl leading-[3.5rem] sm:text-6xl sm:leading-[5.5rem] font-semibold text-white text-center"
        }
      >
        {children}
      </h1>
    );
}

export default PageHeader;