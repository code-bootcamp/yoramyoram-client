import { gql } from "@apollo/client";

export const FETCH_LOGIN_ADMIN = gql`
  query fetchLoginAdminUser {
    fetchLoginAdminUser {
      id
      name
      email
      phone
      address
      point
    }
  }
`;
