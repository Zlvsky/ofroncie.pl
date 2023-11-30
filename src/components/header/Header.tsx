import React from 'react';
import Image from 'next/image';
import logo from "/public/logo.png";
import Link from 'next/link';
import SearchInput from './SearchInput';


const links = [
  {
    name: "Artykuły",
    path: "/blog"
  },
  // {
  //   name: "Kursy",
  //   path: "/kursy"
  // },
  {
    name: "O mnie",
    path: "/o-mnie"
  },
]

function Header({ absolute }: { absolute?: boolean }) {

    return (
      <div className={`${absolute ? "absolute" : ""}  w-full px-4 py-8 `}>
        <div className="flex flex-row justify-between items-center max-w-7xl mx-auto">
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={210} />
          </Link>
          <div className="flex flex-row justify-between items-center gap-6">
            {links.map((link) => (
              <Link
                href={link.path}
                className="text-white text-lg font-semibold"
                key={link.name}
              >
                {link.name}
              </Link>
            ))}
            <SearchInput />
          </div>
        </div>
      </div>
    );
}

export default Header;