import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { onError } from "@apollo/client/link/error";

interface IApolloSetting {
  children: JSX.Element;
}

const GLOBAL_STATE = new InMemoryCache();

export default function ApolloSetting(props: IApolloSetting) {
  // const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  // const restoreAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable);

  // useEffect(() => {
  //   void restoreAccessToken.toPromise().then((newAccessToken) => {
  //     setAccessToken(newAccessToken);
  //   });
  // }, []);

  // const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  //   if (typeof graphQLErrors !== "undefined") {
  //     for (const err of graphQLErrors) {
  //       if (err.extensions.code === "UNAUTHENTICATED") {
  //         return fromPromise(
  //           getAccessToken().then((newAccessToken) => {
  //             setAccessToken(newAccessToken);

  //             if (typeof newAccessToken !== "string") return;
  //             operation.setContext({
  //               headers: {
  //                 ...operation.getContext().headers,
  //                 Authorization: `Bearer ${newAccessToken}`,
  //               },
  //             });
  //           })
  //         ).flatMap(() => forward(operation));
  //       }
  //     }
  //   }
  // });

  const uploadLink = createUploadLink({
    uri: "https://yoramyoram-backend.shop/graphql",
    // headers: {Authorization: `Bearer ${accessToken}`},
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
