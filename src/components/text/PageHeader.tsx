import React from 'react';

type HeaderProps = {
    children: React.ReactNode;
}

function PageHeader({ children }: HeaderProps) {
    return <h1 className={"text-6xl font-semibold text-white text-center leading-[5.5rem]"}>{children}</h1>;
}

export default PageHeader;