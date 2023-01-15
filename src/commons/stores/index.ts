import { atom, selector } from "recoil";
import { getAccessToken } from "../library/getAccessToken";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});

export const findUserEmailState = atom({
  key: "findUserEmailState",
  default: "",
});

export const updataPasswordPhoneState = atom({
  key: "updataPasswordPhoneState",
  default: "",
});

export const isAdminState = atom({
  key: "isAdminState",
  default: false,
});

export const isSelectedOption = atom({
  key: "isOption",
  default: "",
});

export const selectedState = atom({
  key: "select",
  default: "",
});

export const MoveToPageState = atom({
  key: "MoveToPage",
  default: "",
});

export const searchProductsState = atom({
  key: "searchProducts",
  default: 0,
});

export const IsSearchState = atom({
  key: "IsSearch",
  default: false,
});
