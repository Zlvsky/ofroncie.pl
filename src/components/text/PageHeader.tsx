import React from 'react';

type HeaderProps = {
    children: React.ReactNode;
}

function PageHeader({ children }: HeaderProps) {
    return (
      <h1
        className={
          "text-4xl leading-[3.5rem] sm:text-6xl sm:leading-[5.5rem] font-semibold text-white text-center"
        }
      >
        {children}
      </h1>
    );
}

export default PageHeader;