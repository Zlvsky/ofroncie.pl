import { RefObject, useState } from "react";
import copyToClipboard from "copy-to-clipboard";

const useCopy = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>
) => {
  const [isCopied, setCopied] = useState(false);

  const copy = () => {
    if (isCopied) return;

    if (!ref.current) throw new Error("Reference is null.");
    copyToClipboard(ref.current.textContent || "");

    setCopied(true);
  };

  return { ref, isCopied, copy };
};

export default useCopy;
