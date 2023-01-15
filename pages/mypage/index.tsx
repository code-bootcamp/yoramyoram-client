import { useAuth } from "../../src/component/commons/custom/useAuth";
import Mypage from "../../src/component/unit/mypage";

export default function MyPage() {
  useAuth();
  return <Mypage />;
}
