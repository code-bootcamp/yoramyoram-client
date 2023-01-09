import { gql } from "@apollo/client";

export const UPLOAD_IMAGE = gql`
  mutation uploadImage($images: [Upload!]!) {
    uploadImage(images: $images)
  }
`;
