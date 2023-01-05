import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      id
      name
    }
  }
`;

export const SEND_TOKEN = gql`
  mutation sendTokentoPhone($phone: String!) {
    sendTokentoPhone(phone: $phone)
  }
`;

export const CHECK_TOKEN = gql`
  mutation checkTokenPhone($phone: String!, $phoneToken: String!) {
    checkTokenPhone(phone: $phone, phoneToken: $phoneToken)
  }
`;
