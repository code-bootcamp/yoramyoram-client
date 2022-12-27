import { PropertySafetyFilled } from "@ant-design/icons";
import { useRouter } from "next/router";
import LayoutFooter from "./footer/LayoutFooter.index";
import LayoutHeader from "./header/LayoutHeader.index";

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const HIDDEN_FOOTER = ["/"];
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);

  return (
    <>
      <LayoutHeader />
      <div>{props.children}</div>
      {!isHiddenFooter && <LayoutFooter />}
    </>
  );
}
