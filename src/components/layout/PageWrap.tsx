import { memo } from "react"; 
import Footer from "../footer/Footer";
import styles from "./layout.module.scss";

type PageWrapProps = {
  readonly children: React.ReactNode;
  readonly hideFooter?: boolean;
};

const PageWrap = memo(({ children, hideFooter }: PageWrapProps) => {
  return (
    <div className={styles.pagewrap}>
      {children}
      {!hideFooter && <Footer />}
    </div>
  );
});

PageWrap.displayName = "PageWrap";

export default PageWrap;