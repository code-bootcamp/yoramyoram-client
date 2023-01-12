import * as S from "./ProductReview.styles";
import React, { ChangeEvent, useEffect, useState } from "react";
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
} from "../../../../../commons/types/generated/types";
import { Button, Modal } from "antd";
import { useForm } from "react-hook-form";
import { string } from "yup/lib/locale";
import { useRouter } from "next/router";
import { Point } from "../../../basket/Basket.styles";
import { getDate } from "../../../../../commons/library/util";
import Pagination01 from "../../../../commons/pagination/01/Pagination01.container";

interface IData {
  star: number;
  content: string;
  productId: string;
}

interface IProps {
  data?: Pick<IQuery, "fetchProduct">;
  user?: Pick<IQuery, "fetchLoginUser">;
}

export default function ProductReview(props: IProps) {
  const router = useRouter();
  const [star, setStar] = useState(0);
  const [content, setContent] = useState("");
  const [commentId, setCommentId] = useState("");
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isEditPrev, setIsEditPrev] = useState(false);

  //+=======================모달관련
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
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
  console.log(comments);

  const { data: comment } = useQuery<
    Pick<IQuery, "fetchComment">,
    IQueryFetchCommentArgs
  >(FETCH_COMMENT, {
    variables: {
      commentId,
    },
  });

  const { data: dataCommentsCount, refetch: countComment } = useQuery<
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
    setCommentId(e.currentTarget.id);
    setIsDelete(true);
  };

  const onClickDelete = async (e: any) => {
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
        ],
      });
      alert("댓글삭제됨!");
      setIsDelete(false);
    } catch {
      Modal.warning({ content: "삭제오류!" });
    }
  };
  console.log(comment?.fetchComment?.star);
  console.log(star);
  console.log(comment?.fetchComment?.content);

  const onChangeContent = (e: ChangeEvent<HTMLInputElement>) => {
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
        ],
      });
      alert("댓글이 등록됨!");
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
  const onClickIsEdit = (event: any) => {
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
        ],
      });
      alert("댓글이 수정됨!");
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
                  <div>{props.data?.fetchProduct.name}</div>
                  <div>{props.user?.fetchLoginUser.name}</div>
                  <S.CommentInput
                    type="text"
                    placeholder="구매평을 작성해주세요."
                    onChange={onChangeContent}
                  />
                  <div></div>
                </S.ContentBox>
              </S.ModalBox>
            )}
          </div>
        </S.ReviewHeader>
        {comments?.fetchComments.map((el, idx) => (
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
                  <div>{getDate(el.createdAt)}</div>
                </S.ReviewRelatedWrapper>
              </S.ReviewDateWrapper>

              {/* <S.ReviewCommentBtn>
              <button>댓글</button>1
            </S.ReviewCommentBtn> */}
            </S.ReviewInner>
          </S.ReviewInnerWrapper>
        ))}
        <Pagination01
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
              type="text"
              placeholder="구매평을 작성해주세요."
              value={content || comment?.fetchComment?.content}
              onChange={onChangeContent}
            />
            <div></div>
          </S.ContentBox>
        </S.ModalBox>
      )}
    </>
  );
}
