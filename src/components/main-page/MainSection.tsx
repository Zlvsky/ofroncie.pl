import React from "react";
import Button from "../common/Button";
import Link from "next/link";
import MainPageHeader from "../text/MainPageHeader";

const mainBackground = "/images/mainBackground.svg";

function MainSection() {
  return (
    <div
      className="flex flex-col gap-20 justify-center items-center w-full h-full min-h-[90vh] bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${mainBackground})` }}
    >
      <MainPageHeader>
        oFroncie.pl, czyli o <br />
        <span className="bg-white text-black rounded-2xl px-3 mr-5">
          front-endzie
        </span>
        i nie tylko.
      </MainPageHeader>
      <Link href="/blog">
        <Button size="sm">Sprawdź Bloga</Button>
      </Link>
    </div>
  );
}

export default MainSection;
