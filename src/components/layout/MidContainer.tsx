import { IChildren } from "@/types/Layout";

export default function MidContainer({ children }: IChildren) {
  return <div className="w-full max-w-5xl px-4 mx-auto">{children}</div>;
}
