import * as S from "./ProductWrite.styles";
import {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useState,
} from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { Modal, Select } from "antd";
import {
  CREATE_PRODUCT,
  UPLOAD_IMAGE,
  UPDATE_PRODUCT,
} from "../../../commons/hooks/mutation/useCreateProduct";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateProductArgs,
  IMutationUpdateProductArgs,
  IMutationUploadImageArgs,
} from "../../../../commons/types/generated/types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./product-validation";
import { v4 as uuidv4 } from "uuid";
import Uploads01 from "../../../commons/uploads/01/Uploads01.index";

import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_COUNT,
} from "../../../commons/hooks/queries/useFetchProducts";
import { FETCH_PRODUCT } from "../../../commons/hooks/queries/useFetchProduct";
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function ProductWrite(props: any) {
  // TAG //
  const [tagItem, setTagItem] = useState<string>("");
  const [tagList, setTagList] = useState<string[]>([]);
  const [tagItemTwo, setTagItemTwo] = useState<string>("");
  const [tagListTwo, setTagListTwo] = useState<string[]>([]);
  const [selectValue1, setSelectValue1] = useState("");
  const [selectValue2, setSelectValue2] = useState("");

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.length !== 0 && e.key === "Enter") {
      submitTagItem();
    }
  };
  const onKeyPressTwo = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.length !== 0 && e.key === "Enter") {
      submitTagItemTwo();
    }
  };

  const submitTagItem = () => {
    let updatedTagList = [...tagList];
    updatedTagList.push(tagItem);
    setTagList(updatedTagList);
    setTagItem("");
  };
  const submitTagItemTwo = () => {
    let updatedTagList = [...tagListTwo];
    updatedTagList.push(tagItemTwo);
    setTagListTwo(updatedTagList);
    setTagItemTwo("");
  };

  const deleteTagItem = (e: MouseEvent<HTMLButtonElement>) => {
    const deleteTagItem =
      e.currentTarget.parentElement?.firstChild?.textContent;
    const filteredTagList = tagList.filter(
      (tagItem) => tagItem !== deleteTagItem
    );
    setTagList(filteredTagList);
    // target객체 의 유형이 이고 TypeScript에서 허용되지 않는( 활성화된 EventTarget | null경우) nullable 유형의 속성에 액세스하려고 하기 때문에 발생합니다. 유형 가드를 통해서만 strictNullChecks유형을 좁혀서 이 오류를 수정할 수 있습니다
  };
  const deleteTagItemTwo = (e: MouseEvent<HTMLButtonElement>) => {
    const deleteTagItemTwo =
      e.currentTarget.parentElement?.firstChild?.textContent;
    const filteredTagList = tagListTwo.filter(
      (tagItemTwo) => tagItemTwo !== deleteTagItemTwo
    );
    setTagListTwo(filteredTagList);
  };

  useEffect(() => {
    document.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
      }
    });
  }, [props.data]);

  const router = useRouter();
  const [files, setFiles] = useState<File[]>([]);
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [uploadImage] = useMutation<
    Pick<IMutation, "uploadImage">,
    IMutationUploadImageArgs
  >(UPLOAD_IMAGE);

  const [updateProduct] = useMutation<
    Pick<IMutation, "updateProduct">,
    IMutationUpdateProductArgs
  >(UPDATE_PRODUCT);

  const [createProduct] = useMutation<
    Pick<IMutation, "createProduct">,
    IMutationCreateProductArgs
  >(CREATE_PRODUCT);
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState,

    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  //=================================
  const watchAll = Object.values(watch());

  useEffect(() => {
    if (watchAll.every((el) => el)) {
    } else {
    }
  }, [watchAll]);
  // console.log(watchAll);
  //===================================

  const onChangeContents = (value: string) => {
    // console.log(value);

    setValue("detailContent", value === "<p><br></p>" ? "" : value);
    void trigger("detailContent");
  };

  const onClickSubmit = async (data: any) => {
    try {
      const result = await createProduct({
        variables: {
          createProductInput: {
            name: data.name,
            price: data.price,
            description: data.description,
            etc1Name: data.etc1Name,
            etc1Value: String(tagList),
            etc2Name: data.etc2Name,
            etc2Value: String(tagListTwo),
            detailContent: data.detailContent,
            productImages: [...fileUrls],
            productCategoryId: data.productCategoryId,
          },
        },
        refetchQueries: [
          {
            query: FETCH_PRODUCTS,
            variables: {
              page: 1,
              cateId: "",
            },
          },
          {
            query: FETCH_PRODUCTS_COUNT,
            variables: {
              cateId: "",
            },
          },
        ],
      });
      // console.log(result);
      Modal.success({ content: "상품이 등록되었습니다." });
      void router.push(`/products/${result.data?.createProduct.product_id}`);
    } catch (error) {
      Modal.error({ content: "상품 등록 항목을 다시 확인해주세요." });
    }
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl[0];
    setFileUrls(newFileUrls);
  };

  //상품 수정 onClick Event ============================================
  // 이걸 살리면 이미지 미리보기가 된다.

  useEffect(() => {
    setFileUrls([
      props.data?.fetchProduct?.productImages[0].url,
      props.data?.fetchProduct?.productImages[1].url,
      props.data?.fetchProduct?.productImages[2].url,
    ]);

    setSelectValue1(props.data?.fetchProduct?.etc1Name);
    setSelectValue2(props.data?.fetchProduct?.etc2Name);
  }, [props.data]);

  // console.log(props.data?.fetchProduct.etc1Name);
  // console.log(props.data?.fetchProduct.etc2Name);
  const onClickUpdateSubmit = async (data: any) => {
    // console.log(data);

    // update 수정해볼게요 2022/01/14

    const images = await Promise.all(
      files.map(async (el) =>
        el !== undefined
          ? await uploadImage({ variables: { images: data.images } })
          : undefined
      )
    );

    const myvariables = {
      productId: String(router.query.productId),
      updateProductInput: {
        name: data.name,
        price: data.price,
        description: data.description,
        etc1Name: data.etc1Name,
        etc1Value: String(tagList),
        etc2Name: data.etc2Name,
        etc2Value: String(tagListTwo),
        detailContent: data.detailContent,
        productImages: [...fileUrls],
        productCategoryId: data.productCategoryId,
      },
    };

    if (data.name) myvariables.updateProductInput.name = data.name;
    if (data.price) myvariables.updateProductInput.price = data.price;
    if (data.etc1Name) myvariables.updateProductInput.etc1Name = data.etc1Name;
    if (data.etc2Name) myvariables.updateProductInput.etc1Name = data.etc2Name;
    if (data.etc1Value)
      myvariables.updateProductInput.etc1Value = String(tagList);
    if (data.etc2Name) myvariables.updateProductInput.etc2Name = data.etc2Name;
    if (data.etc2Value)
      myvariables.updateProductInput.etc2Value = String(tagListTwo);
    if (data.detailContent)
      myvariables.updateProductInput.detailContent = data.detailContent;
    if (data.productImages)
      myvariables.updateProductInput.productImages = [...fileUrls];
    if (data.productCategoryId)
      myvariables.updateProductInput.productCategoryId = data.productCategoryId;

    const result = await updateProduct({
      variables: myvariables,
      refetchQueries: [
        {
          query: FETCH_PRODUCT,
          variables: {
            productId: router.query.productId,
          },
        },
      ],
    });
    // console.log(result);
    router.push(`/products/${result.data?.updateProduct.product_id}`);
  };

  //=======================================================================================

  return (
    <div style={{ backgroundColor: "#fcfbfa" }}>
      <S.Wrapper>
        <S.Title>{props.isEdit ? "상품 수정" : "상품 등록"}</S.Title>
        <S.Form
          onSubmit={
            props.isEdit
              ? handleSubmit(onClickUpdateSubmit)
              : handleSubmit(onClickSubmit)
          }
        >
          <S.HalfWrapper>
            <S.HalfBox>
              <S.Label>상품명</S.Label>
              <S.Input
                type="text"
                placeholder="상품명을 입력하세요."
                {...register("name")}
                defaultValue={props.data?.fetchProduct?.name}
              ></S.Input>
              <S.Error>{formState.errors.name?.message}</S.Error>
            </S.HalfBox>
            <S.HalfBox>
              <S.Label>가격</S.Label>
              <S.Input
                type="text"
                placeholder="가격을 입력하세요."
                {...register("price")}
                defaultValue={props.data?.fetchProduct?.price}
              ></S.Input>
              <S.Error>{formState.errors.price?.message}</S.Error>
            </S.HalfBox>
          </S.HalfWrapper>
          <S.HalfWrapper>
            <S.SelectWrap>
              <S.Label>상품 카테고리</S.Label>
              <S.SelectBox
                {...register("productCategoryId")}
                defaultValue={
                  props.data?.fetchProduct?.productCategory?.category_id
                }
              >
                <option value="카테고리를 선택하세요." disabled selected>
                  카테고리를 선택하세요.
                </option>
                <option value="70710037-9402-4665-aff0-ad3f0c68f364">
                  주방
                </option>
                <option value="fd798d30-4809-4dfa-961f-9ef7620826f4">
                  생활
                </option>
                <option value="6a7c5ceb-3440-4878-ac26-d1e8f69c94cc">
                  욕실
                </option>
                <option value="e1b97aef-5520-4d41-9363-4bf250ddf98a">
                  여성용품
                </option>
                <option value="a0087668-4deb-4393-ba3c-53064c6908b3">
                  반려동물
                </option>
              </S.SelectBox>
            </S.SelectWrap>
            <S.OptionBox>
              <S.Label>상품 요약</S.Label>
              <S.Input
                type="text"
                placeholder="상품 요약을 입력하세요."
                {...register("description")}
                defaultValue={props.data?.fetchProduct?.description}
              ></S.Input>
            </S.OptionBox>
          </S.HalfWrapper>
          <S.HalfWrapper>
            <S.SelectWrap>
              <S.Label>옵션명</S.Label>
              <S.SelectBox
                {...register("etc1Name")}
                value={selectValue1}
                onChange={(v) => {
                  setSelectValue1(v.target.value);
                }}
              >
                {props.isEdit ? (
                  <option value="selectOption1" disabled>
                    옵션을 선택하세요.
                  </option>
                ) : (
                  <option value="selectOption1" hidden selected>
                    옵션을 선택하세요.
                  </option>
                )}

                <option value="color1">컬러</option>
                <option value="size1">사이즈</option>
              </S.SelectBox>
            </S.SelectWrap>
            <S.OptionBox>
              <S.Label>옵션값</S.Label>
              <S.WholeBox>
                <S.TagBox>
                  {tagList.map((tagItem, index) => {
                    return (
                      <S.TagItem key={index}>
                        <S.Text>{tagItem}</S.Text>
                        <S.Button onClick={deleteTagItem} type="button">
                          ✕
                        </S.Button>
                      </S.TagItem>
                    );
                  })}
                  <S.TagInput
                    type="text"
                    placeholder="옵션값을 입력하세요."
                    tabIndex={2}
                    onChange={(e) => setTagItem(e.currentTarget.value)}
                    value={tagItem}
                    onKeyPress={onKeyPress}
                  />
                </S.TagBox>
              </S.WholeBox>
            </S.OptionBox>
          </S.HalfWrapper>
          <S.HalfWrapper>
            <S.SelectWrap>
              <S.Label>옵션명</S.Label>
              <S.SelectBox
                {...register("etc2Name")}
                value={selectValue2}
                onChange={(v) => {
                  setSelectValue2(v.target.value);
                }}
              >
                {props.isEdit ? (
                  <option value="selectOption2" disabled>
                    옵션을 선택하세요.
                  </option>
                ) : (
                  <option value="selectOption2" hidden selected>
                    옵션을 선택하세요.
                  </option>
                )}
                {/* <option value="selectOption2" hidden selected>
                  옵션을 선택하세요.
                </option> */}
                <option value="color2">컬러</option>
                <option value="size2">사이즈</option>
              </S.SelectBox>
            </S.SelectWrap>
            <S.OptionBox>
              <S.Label>옵션값</S.Label>
              <S.WholeBox>
                <S.TagBox>
                  {tagListTwo.map((tagItemTwo, index) => {
                    return (
                      <S.TagItem key={index}>
                        <S.Text>{tagItemTwo}</S.Text>
                        <S.Button onClick={deleteTagItemTwo} type="button">
                          ✕
                        </S.Button>
                      </S.TagItem>
                    );
                  })}
                  <S.TagInput
                    type="text"
                    placeholder="옵션값을 입력하세요."
                    tabIndex={2}
                    onChange={(e) => setTagItemTwo(e.currentTarget.value)}
                    value={tagItemTwo}
                    onKeyPress={onKeyPressTwo}
                  />
                </S.TagBox>
              </S.WholeBox>
            </S.OptionBox>
          </S.HalfWrapper>
          <S.InputWrapper>
            <S.Label>상품 정보</S.Label>
            <ReactQuill
              onChange={onChangeContents}
              style={{
                fontSize: "15px",
              }}
              className="quill"
              defaultValue={props.data?.fetchProduct?.detailContent}
            />
            <S.Error>{formState.errors.contents?.message}</S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>상품 사진</S.Label>
            <S.PhotoWrapper>
              {fileUrls.map((el, index) => (
                <S.PhotoBox>
                  <Uploads01
                    key={uuidv4()}
                    index={index}
                    fileUrl={el}
                    onChangeFileUrls={onChangeFileUrls}
                  />
                </S.PhotoBox>
              ))}
            </S.PhotoWrapper>
          </S.InputWrapper>
          <S.ButtonBox>
            <S.Cancel type="button" onClick={router.back}>
              취소
            </S.Cancel>
            <S.Submit>{props.isEdit ? "수정" : "등록"}</S.Submit>
          </S.ButtonBox>
        </S.Form>
      </S.Wrapper>
    </div>
  );
}
