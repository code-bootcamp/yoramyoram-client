import { useAuth } from "../../src/component/commons/custom/useAuth";
import Basket from "../../src/component/unit/basket/Basket.index";

export default function BasketPage() {
  useAuth();
  return <Basket />;
}
