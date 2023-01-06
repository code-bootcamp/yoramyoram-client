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
