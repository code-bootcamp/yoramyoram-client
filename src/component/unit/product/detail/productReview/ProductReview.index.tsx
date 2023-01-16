import * as S from "./ProductReview.styles";
import React, { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { Rate } from "antd";
import { CloseOutlined, FormOutlined } from "@ant-design/icons";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_COMMENT,
  DELETE_COMMENT,
  FETCH_COMMENT,
  FETCH_COMMENTS,
  FETCH_COMMENTS_COUNT,
  UPDATE_COMMENT,
} from "./ProductReview.queries";
import {
  IMutation,
  IMutationCreateCommentArgs,
  IMutationDeleteCommentArgs,
  IQuery,
  IQueryFetchCommentArgs,
  IQueryFetchCommentsCountArgs,
  IQueryFetchProductArgs,
} from "../../../../../commons/types/generated/types";
import { Button, Modal } from "antd";
import { useForm } from "react-hook-form";
import { string } from "yup/lib/locale";
import { useRouter } from "next/router";
import { Point } from "../../../basket/Basket.styles";
import { getDate } from "../../../../../commons/library/util";
import Pagination01 from "../../../../commons/pagination/01/Pagination01.container";
import Pagination02 from "../../../../commons/pagination/02/Pagination02.container";
import { FETCH_PRODUCT } from "../../../../commons/hooks/queries/useFetchProduct";

interface IData {
  star: number;
  content: string;
  productId: string;
  comment_id: string;
  user?: IUser;
  createdAt?: Pick<IQuery, "fetchComments">;
}

interface IUser {
  name?: string;
  typename: string;
}

interface IProps {
  data?: Pick<IQuery, "fetchProduct">;
  user?: Pick<IQuery, "fetchLoginUser">;
  comments?: Pick<IQuery, "fetchComments">;
}

export default function ProductReview(props: IProps) {
  const router = useRouter();
  const [star, setStar] = useState(0);
  const [content, setContent] = useState("");
  const [commentId, setCommentId] = useState("");
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  //+=======================모달관련
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    if (!props.user) return Modal.warning({ content: "로그인해주세요!" });
    setIsModalOpen((prev) => !prev);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsDelete(false);
    setIsEdit(false);
  };
  //====================================

  const { data: comments, refetch } = useQuery(FETCH_COMMENTS, {
    variables: {
      productId: String(router.query.productId),
      page: 1,
    },
  });
  // console.log(comments);

  const { data: comment } = useQuery<
    Pick<IQuery, "fetchComment">,
    IQueryFetchCommentArgs
  >(FETCH_COMMENT, {
    variables: {
      commentId,
    },
  });

  const { data: dataCommentsCount } = useQuery<
    Pick<IQuery, "fetchCommentsCount">,
    IQueryFetchCommentsCountArgs
  >(FETCH_COMMENTS_COUNT, {
    variables: {
      productId: String(router.query.productId),
    },
  });

  console.log(dataCommentsCount);

  const [createComment] = useMutation<
    Pick<IMutation, "createComment">,
    IMutationCreateCommentArgs
  >(CREATE_COMMENT);

  const [updateComment] = useMutation(UPDATE_COMMENT);

  const [deleteComment] = useMutation<
    Pick<IMutation, "deleteComment">,
    IMutationDeleteCommentArgs
  >(DELETE_COMMENT);

  const onClickComment = (e: MouseEvent<HTMLButtonElement>) => {
    if (!props.user) return Modal.warning({ content: "로그인해주세요!" });

    setCommentId(e.currentTarget.id);
    setIsDelete(true);
  };

  const onClickDelete = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      await deleteComment({
        variables: {
          commentId,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: {
              productId: String(router.query.productId),
              page: 1,
            },
          },
          {
            query: FETCH_PRODUCT,
            variables: {
              productId: String(router.query.productId),
            },
          },
          {
            query: FETCH_COMMENTS_COUNT,
            variables: {
              productId: String(router.query.productId),
            },
          },
        ],
      });
      console.log(String(router.query.productId));
      setIsDelete(false);
    } catch {
      Modal.warning({ content: "삭제오류!" });
    }
  };
  // console.log(comment?.fetchComment?.star);
  // console.log(star);
  // console.log(comment?.fetchComment?.content);

  const onChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const onClickSubmitForm = async () => {
    if (!content || !star) {
      Modal.warning({
        content: "내용을 입력해주세요!",
      });
      return;
    }
    try {
      await createComment({
        variables: {
          createCommentInput: {
            star,
            content,
            productId: String(router.query.productId),
          },
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: {
              productId: String(router.query.productId),
              page: 1,
            },
          },
          {
            query: FETCH_PRODUCT,
            variables: {
              productId: String(router.query.productId),
            },
          },
          {
            query: FETCH_COMMENTS_COUNT,
            variables: {
              productId: String(router.query.productId),
            },
          },
        ],
      });
      setContent("");
      setIsModalOpen(false);
    } catch {
      Modal.warning({ content: "정보를 입력해주세요." });
    }
  };

  //=================================수정

  // interface IEvent {
  //   setIsEdit: boolean;
  //   setCommentId: (event: MouseEvent<HTMLButtonElement>) => void;
  // }
  const onClickIsEdit = (event: MouseEvent<HTMLButtonElement>) => {
    if (!props.user) return Modal.warning({ content: "로그인해주세요!" });

    setIsEdit(true);
    setCommentId(event.currentTarget.id);
  };

  interface IUpdateCommentInput {
    star?: number;
    content?: string;
    productId?: string;
  }
  const onClickEditSubmit = async () => {
    if (!star || !content) return alert("정보를 입력해주세요");

    const updateCommentInput: IUpdateCommentInput = {
      productId: String(router.query.productId),
    };
    if (star !== comment?.fetchComment?.star) updateCommentInput.star = star;
    if (content) updateCommentInput.content = content;

    try {
      await updateComment({
        variables: {
          commentId,
          updateCommentInput,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: {
              productId: String(router.query.productId),
              page: 1,
            },
          },
          {
            query: FETCH_PRODUCT,
            variables: {
              productId: String(router.query.productId),
            },
          },
          {
            query: FETCH_COMMENTS_COUNT,
            variables: {
              productId: String(router.query.productId),
            },
          },
        ],
      });
      setIsEdit(false);
    } catch {
      Modal.warning({ content: "정보를 입력해주세요." });
    }
  };

  return (
    <>
      {isDelete && (
        <Modal
          title="Basic Modal"
          open={isDelete}
          onOk={onClickDelete}
          onCancel={handleCancel}
        >
          <p>정말 삭제하시겠습니까?</p>
        </Modal>
      )}
      <S.ReviewWrapper>
        <S.ReviewHeader>
          <S.HeaderText>
            상품을 구매하신 분들이 작성하신 리뷰입니다.
          </S.HeaderText>
          <div style={{ paddingBottom: "25px" }}>
            <S.ReviewWriteBtn onClick={showModal}>구매평 작성</S.ReviewWriteBtn>
            {isModalOpen && (
              <S.ModalBox
                centered
                title="구매평 작성"
                open={isModalOpen}
                onOk={onClickSubmitForm}
                onCancel={handleCancel}
              >
                <S.ContentBox>
                  <Rate onChange={setStar} />
                  <S.PrdName>{props.data?.fetchProduct.name}</S.PrdName>
                  <S.PrdUser>{props.user?.fetchLoginUser.name}</S.PrdUser>
                  <S.CommentInput
                    placeholder="구매평을 작성해주세요."
                    onChange={onChangeContent}
                  ></S.CommentInput>
                </S.ContentBox>
              </S.ModalBox>
            )}
          </div>
        </S.ReviewHeader>
        {comments?.fetchComments.map((el: IData) => (
          <S.ReviewInnerWrapper key={el.comment_id}>
            <S.ReviewInner>
              <S.ReviewTop>
                <S.ReviewTopLeft>
                  <Rate value={el.star} />
                  <S.OptionText>[옵션] 색상: 화이트</S.OptionText>
                </S.ReviewTopLeft>
                <S.ReviewTopRight>
                  <S.ReviewBtnWrapper>
                    <FormOutlined id={el.comment_id} onClick={onClickIsEdit} />
                    <CloseOutlined
                      id={el.comment_id}
                      onClick={onClickComment}
                      style={{ paddingLeft: "27px" }}
                    />
                  </S.ReviewBtnWrapper>
                </S.ReviewTopRight>
              </S.ReviewTop>

              <S.ReviewDateWrapper>
                <S.ReviewText>{el.content}</S.ReviewText>
                <S.ReviewRelatedWrapper>
                  <div>{el.user?.name}</div>
                  <div>{getDate(String(el.createdAt))}</div>
                </S.ReviewRelatedWrapper>
              </S.ReviewDateWrapper>
            </S.ReviewInner>
          </S.ReviewInnerWrapper>
        ))}
        <Pagination02
          refetch={refetch}
          count={dataCommentsCount?.fetchCommentsCount}
        />
      </S.ReviewWrapper>
      {isEdit && (
        <S.ModalBox
          centered
          title="구매평 수정"
          open={isEdit}
          onOk={onClickEditSubmit}
          onCancel={handleCancel}
        >
          <S.ContentBox>
            <Rate
              value={star || comment?.fetchComment?.star}
              onChange={setStar}
            />
            <div>{props.data?.fetchProduct.name}</div>
            <div>{props.user?.fetchLoginUser.name}</div>
            <S.CommentInput
              placeholder="구매평을 작성해주세요."
              value={content || comment?.fetchComment?.content}
              onChange={onChangeContent}
            ></S.CommentInput>
          </S.ContentBox>
        </S.ModalBox>
      )}
    </>
  );
}
