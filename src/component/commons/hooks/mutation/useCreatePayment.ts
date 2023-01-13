import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreatePaymentArgs,
} from "../../../../commons/types/generated/types";

const CREATE_PAYMENT = gql`
  mutation createPayment($point: Int!, $ect1: String!, $ect2: String!) {
    createPayment(point: $point, ect1: $ect1, ect2: $ect2) {
      id
      user
    }
  }
`;

export const useCreatePayment = () => {
  const [createPayment] = useMutation<
    Pick<IMutation, "createPayment">,
    IMutationCreatePaymentArgs
  >(CREATE_PAYMENT);

  return { createPayment };
};
