import { IChildren } from "@/types/Layout";

export default function BigContainer({ children }: IChildren) {
  return <div className="w-full max-w-7xl px-4 mx-auto">{children}</div>;
}
