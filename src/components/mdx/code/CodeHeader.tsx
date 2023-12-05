import React, { memo, useCallback } from "react";
import cn from "classnames";
import CopyIcon from "../../../../public/icons/copy.svg";
import DoneIcon from "../../../../public/icons/done.svg";
import ExternalIcon from "../../../../public/icons/external.svg";
import { getParameters } from "codesandbox/lib/api/define";
import Image from "next/image";

type CodeHeaderProps = {
  isCopied: boolean;
  className: string | undefined;
  onCopy: () => void;
  code: string | null | undefined;
  title: string | undefined;
  icon: string | undefined;
};

export const CodeHeader = memo<CodeHeaderProps>(
  ({ onCopy, className, isCopied, code, title, icon }) => {
    return (
      <header className="w-full bg-darkBg2 flex flex-row items-center justify-between">
        <div className="flex flex-row gap-1 py-2 px-4 bg-secondary border-r border-black">
          {icon && <Image src={icon} alt={title || ""} width={16} height={16} />}
          <p data-codetitle className="text-base">
            {title}
          </p>
        </div>

        <button className="p-2" onClick={onCopy}>
          <span className="visually-hidden">
            {isCopied ? "Skopiowano" : "Skopiuj"}
          </span>
          {isCopied ? <DoneIcon /> : <CopyIcon />}
        </button>
      </header>
    );
  }
);

CodeHeader.displayName = "CodeHeader";
