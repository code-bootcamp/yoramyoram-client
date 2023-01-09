import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
  fromPromise,
} from "@apollo/client";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { onError } from "@apollo/client/link/error";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../commons/stores";
import { getAccessToken } from "../../../commons/library/getAccessToken";

interface IApolloSetting {
  children: JSX.Element;
}

const GLOBAL_STATE = new InMemoryCache();

export default function ApolloSetting(props: IApolloSetting) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const ValueLoadable = useRecoilValueLoadable(restoreAccessTokenLoadable);
  useEffect(() => {
    void ValueLoadable.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
    // console.log(accessToken);
  }, []);

  // fromPromise;

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (typeof graphQLErrors !== "undefined") {
      for (const err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken);
              if (typeof newAccessToken !== "string") return;
              operation.setContext({
                headers: {
                  ...operation.getContext().headers,
                  Authorization: `Bearer ${newAccessToken}`,
                },
              });
            })
          ).flatMap(() => forward(operation));
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://yoramyoram-backend.shop/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: GLOBAL_STATE,
  });

  return (
    <>
      <ApolloProvider client={client}>{props.children}</ApolloProvider>
    </>
  );
}
