import React from "react";
import PageHeader from "../text/PageHeader";
import Button from "../common/Button";

const mainBackground = "/images/mainBackground.svg";

function MainSection() {
  return (
    <div
      className="flex flex-col gap-20 justify-center items-center w-full h-full min-h-[90vh] bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${mainBackground})` }}
    >
      <PageHeader>
        oFroncie.pl, czyli o <br />
        <span className="bg-white text-black rounded-2xl px-3 mr-5">
          front-endzie
        </span>
        i nie tylko.
      </PageHeader>
      <Button size="sm">Sprawdź Bloga</Button>
    </div>
  );
}

export default MainSection;
