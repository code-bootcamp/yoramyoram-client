import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
  mutation createProduct($createProductInput: CreateProductInput!) {
    createProduct(createProductInput: $createProductInput) {
      product_id
      name
      price
      wishListCount
      commentCount
      description
      etc1Name
      etc2Name
      etc1Value
      etc2Value
      detailContent
      productImages {
        productImage_id
        url
      }
      productCategory {
        category_id
        category
      }
      payment {
        id
        impUid
        status
        point
        amount
        etc1
        etc2
        user {
          id
          name
          email
          phone
          address
          add_detail
          point
        }
        createdAt
      }
    }
  }
`;

export const UPLOAD_IMAGE = gql`
  mutation uploadImage($images: [Upload!]!) {
    uploadImage(images: $images)
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation updateProduct(
    $productId: String
    $updateProductInput: UpdateProductInput!
  ) {
    updateProduct(
      productId: $productId
      UpdateProductInput: $UpdateProductInput
    ) {
      product_id
      name
      price
      wishListCount
      commentCount
      description
      etc1Name
      etc2Name
      etc1Value
      etc2Value
      detailContent
      createdAt
      productImages
      productCategory
      payment
    }
  }
`;
