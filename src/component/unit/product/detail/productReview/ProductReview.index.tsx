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
  IQueryFetchCommentsArgs,
  IQueryFetchCommentsCountArgs,
  IQueryFetchProductArgs,
} from "../../../../../commons/types/generated/types";
import { Button, Modal } from "antd";
import { useForm } from "react-hook-form";
import { string } from "yup/lib/locale";
import { useRouter } from "next/router";
import { Point } from "../../../basket/Basket.styles";
import { getDate, NameMask } from "../../../../../commons/library/util";
import Pagination01 from "../../../../commons/pagination/01/Pagination01.container";
import Pagination02 from "../../../../commons/pagination/02/Pagination02.container";
import { FETCH_PRODUCT } from "../../../../commons/hooks/queries/useFetchProduct";
import { FETCH_PRODUCTS } from "../../../../commons/hooks/queries/useFetchProducts";
import { FETCH_COMMENTS_MAIN } from "../../../../commons/hooks/queries/useFetchCommentsMain";

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
  id?: string;
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

  const { data: comments, refetch } = useQuery<
    Pick<IQuery, "fetchComments">,
    IQueryFetchCommentsArgs
  >(FETCH_COMMENTS, {
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

  // console.log(dataCommentsCount);

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
    let useID = e.currentTarget.className;
    if (!props.user) return Modal.warning({ content: "로그인해주세요!" });
    if (props.user?.fetchLoginUser?.id !== useID.split(" ")[2])
      return Modal.warning({ content: "작성자만 삭제할 수 있습니다!" });
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
      // console.log(String(router.query.productId));
      setIsDelete(false);
    } catch {
      Modal.warning({ content: "삭제오류!" });
    }
  };

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
            query: FETCH_PRODUCTS,
            variables: {
              cateId: "",
              page: 1,
            },
          },
          {
            query: FETCH_COMMENTS_COUNT,
            variables: {
              productId: String(router.query.productId),
            },
          },
          {
            query: FETCH_COMMENTS_MAIN,
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
    let useID = event.currentTarget.className;
    if (!props.user) return Modal.warning({ content: "로그인해주세요!" });
    if (props.user?.fetchLoginUser?.id !== useID.split(" ")[2])
      return Modal.warning({ content: "작성자만 수정할 수 있습니다!" });
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
        <S.ModalDeleteBox
          open={isDelete}
          // onOk={onClickDelete}
          onCancel={handleCancel}
          className="DeleteModal"
        >
          <S.DeleteTxt>정말 삭제 하시겠습니까?</S.DeleteTxt>
          <S.ButtonBox>
            <S.Cancel onClick={handleCancel}>취소</S.Cancel>
            <S.Ok onClick={onClickDelete}>삭제</S.Ok>
          </S.ButtonBox>
        </S.ModalDeleteBox>
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
                title={
                  <S.TitleWrap>
                    <S.WriteIcon />
                    <S.ModalTitle>구매평 작성</S.ModalTitle>
                  </S.TitleWrap>
                }
                className="ReviewModal"
                open={isModalOpen}
                // onOk={onClickSubmitForm}
                onCancel={handleCancel}
              >
                <S.ContentBox>
                  <S.PrdName>{props.data?.fetchProduct.name}</S.PrdName>
                  <S.PrdUser>{props.user?.fetchLoginUser.name}</S.PrdUser>
                  <Rate onChange={setStar} />

                  <S.CommentInput
                    placeholder="구매평을 작성해주세요."
                    onChange={onChangeContent}
                  ></S.CommentInput>
                  <S.ButtonBox>
                    <S.Cancel onClick={handleCancel}>취소</S.Cancel>
                    <S.Ok onClick={onClickSubmitForm}>등록</S.Ok>
                  </S.ButtonBox>
                </S.ContentBox>
              </S.ModalBox>
            )}
          </div>
        </S.ReviewHeader>
        {comments?.fetchComments.map((el) => (
          <S.ReviewInnerWrapper key={el.comment_id}>
            <S.ReviewInner>
              <S.ReviewTop>
                <S.ReviewTopLeft>
                  <Rate value={el.star} />
                  <S.OptionText>[옵션] 색상: 화이트</S.OptionText>
                </S.ReviewTopLeft>
                <S.ReviewTopRight>
                  <S.ReviewBtnWrapper>
                    <FormOutlined
                      className={el?.user?.id}
                      id={el.comment_id}
                      onClick={onClickIsEdit}
                    />
                    <CloseOutlined
                      className={el?.user?.id}
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
                  <p>{NameMask(String(el.user?.name))}</p>
                  <p>{getDate(String(el.createdAt))}</p>
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
          title={
            <S.TitleWrap>
              <S.WriteIcon />
              <S.ModalTitle>구매평 수정</S.ModalTitle>
            </S.TitleWrap>
          }
          className="ReviewModal"
          open={isEdit}
          // onOk={onClickEditSubmit}
          onCancel={handleCancel}
        >
          <S.ContentBox>
            <S.PrdName>{props.data?.fetchProduct.name}</S.PrdName>
            <S.PrdUser>{props.user?.fetchLoginUser.name}</S.PrdUser>
            <Rate
              value={star || comment?.fetchComment?.star}
              onChange={setStar}
            />

            <S.CommentInput
              placeholder="구매평을 작성해주세요."
              value={content || comment?.fetchComment?.content}
              onChange={onChangeContent}
            ></S.CommentInput>
            <S.ButtonBox>
              <S.Cancel onClick={handleCancel}>취소</S.Cancel>
              <S.Ok onClick={onClickEditSubmit}>수정</S.Ok>
            </S.ButtonBox>
          </S.ContentBox>
        </S.ModalBox>
      )}
    </>
  );
}
