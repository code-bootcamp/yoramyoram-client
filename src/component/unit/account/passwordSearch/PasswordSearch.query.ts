import { gql } from "@apollo/client";

export const FIND_USER_PASSWRD = gql`
  mutation findUserPassword(
    $name: String!
    $phone: String!
    $email: String!
    $token: String!
  ) {
    findUserPassword(name: $name, phone: $phone, email: $email, token: $token)
  }
`;

export const SEND_TOKEN = gql`
  mutation sendTokentoPhone($phone: String!) {
    sendTokentoPhone(phone: $phone)
  }
`;
