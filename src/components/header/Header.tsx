import { useState } from 'react';
import Image from 'next/image';
import logo from "/public/logo.png";
import Link from 'next/link';
import SearchInput from './SearchInput';

import HamburgerSVG from "../../../public/icons/hamburger.svg";
import CloseSVG from "../../../public/icons/close.svg";
import MobileMenu from './MobileMenu';


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
    const [isOpened, setIsOpened] = useState(false);

    const handleClick = () => {
      setIsOpened(prev => !prev);
    }

    const handleClose = () => {
      setIsOpened(false);
    }

    const Navbar = () => (
      <div className={`${absolute ? "absolute" : ""}  w-full px-4 py-8 `}>
        <div className="flex flex-row justify-between items-center max-w-7xl mx-auto">
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={210} />
          </Link>
          <div className="flex md:hidden cursor-pointer" onClick={handleClick}>
            {isOpened ? <CloseSVG /> : <HamburgerSVG />}
          </div>
          <div className="hidden md:flex flex-row justify-between items-center gap-6">
            {links.map((link) => (
              <Link
                href={link.path}
                className="text-white text-lg font-semibold"
                key={link.name}
              >
                {link.name}
              </Link>
            ))}
            {/* <SearchInput /> */}
          </div>
        </div>
      </div>
    );

    return (
      <>
        <Navbar />
        <MobileMenu links={links} isOpened={isOpened} />
        <div
          id="sidebarfixed"
          className={`z-20 transition-all bg-black bg-opacity-50 fixed top-[81px] bottom-0 left-0 right-0 ${
            isOpened ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={handleClose}
        ></div>
      </>
    );
}

export default Header;