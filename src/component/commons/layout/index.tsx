import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LayoutFooter from "./footer/LayoutFooter.index";
import { LayoutHeader, LayoutHeaderMain } from "./header/LayoutHeader.index";

interface ILayoutProps {
  children: JSX.Element;
}
const HIDDEN_FOOTER = [
  "/",
  "/account/id_search/",
  "/account/id_search_success/",
  "/account/password_search/",
  "/account/password_reset/",
  "/account/search_result/",
  "/sign_in/",
  "/join/",
  "/payment_success/",
];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  router.asPath;
  const [scroll, setScroll] = useState(false);

  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);

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
      <div style={{ backgroundColor: "#fcfbfa" }}>{props.children}</div>
      {!isHiddenFooter && <LayoutFooter />}
    </>
  );
}
