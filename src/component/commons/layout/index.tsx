import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LayoutFooter from "./footer/LayoutFooter.index";
import { LayoutHeader, LayoutHeaderMain } from "./header/LayoutHeader.index";

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    // 스크롤이 Top에서 80px 이상 내려오면 true값을 useState에 넣어줌
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      // 스크롤이 80px 미만일경우 false를 넣어줌
      setScroll(false);
    }
  };

  const HIDDEN_FOOTER = ["/", "/account", "/sign_in", "/join"];
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);

  return (
    <>
      {router.pathname === "/" ? (
        scroll ? (
          <LayoutHeaderMain />
        ) : (
          <LayoutHeader />
        )
      ) : (
        <LayoutHeaderMain />
      )}
      <div>{props.children}</div>
      {!isHiddenFooter && <LayoutFooter />}
    </>
  );
}
