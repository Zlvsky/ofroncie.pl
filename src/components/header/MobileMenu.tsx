import { useEffect } from "react";
import Link from 'next/link';

type MenuProps = {
    isOpened: boolean;
    links: {name: string, path: string}[];
}

function MobileMenu({ isOpened, links }: MenuProps) {

  useEffect(() => {
    // HACK used for blocking page scroll when sidebar is active to prevent double scroll
    if (isOpened) {
      document.body.classList.add("hide-overflow");
    } else {
      document.body.classList.remove("hide-overflow");
    }
    return () => document.body.classList.remove("hide-overflow");
  }, [isOpened]);

  return (
    <div
      className={`fixed bg-darkBg  w-full max-w-md right-0 top-[81px]  transition-all will-change-transform duration-200 overflow-y-auto z-30 max-h-[calc(100vh-165px)] ${
        isOpened ? "translate-x-0" : "translate-x-full "
      }`}
    >
      <div className="flex flex-col w-full px-7 py-16 gap-10">
        {links.map((link) => (
            <Link
              href={link.path}
              className="text-center text-white text-xl font-semibold"
              key={link.name}
            >
              {link.name}
            </Link>
        ))}
      </div>
    </div>
  );
}

export default MobileMenu;