import { gql } from "@apollo/client";

export const UPDATE_PASSWORD = gql`
  mutation updatePassword($password: String!, $phone: String!) {
    updatePassword(password: $password, phone: $phone)
  }
`;
