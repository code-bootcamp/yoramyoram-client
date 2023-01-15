import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreatePaymentArgs,
} from "../../../../commons/types/generated/types";

const CREATE_PAYMENT = gql`
  mutation createPayment($point: Int!, $totalAmount: Float!) {
    createPayment(point: $point, totalAmount: $totalAmount) {
      id
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
