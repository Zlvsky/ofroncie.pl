import { memo } from "react"; 
import Footer from "../footer/Footer";

type PageWrapProps = {
  readonly children: React.ReactNode;
  readonly hideFooter?: boolean;
};

const PageWrap = memo(({ children, hideFooter }: PageWrapProps) => {
  return (
    <div className={`h-full w-full flex flex-col items-center`}>
      {children}
      {!hideFooter && <Footer />}
    </div>
  );
});

PageWrap.displayName = "PageWrap";

export default PageWrap;