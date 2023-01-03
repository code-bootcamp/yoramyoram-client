import * as S from "./ProductWrite.styles";
import {
  KeyboardEvent,
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { Select } from "antd";
import { RawValueType } from "rc-select/lib/Select";
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function ProductWrite() {
  const [tagItem, setTagItem] = useState<string>("");
  const [tagList, setTagList] = useState<string[]>([]);
  const [tagItemTwo, setTagItemTwo] = useState<string>("");
  const [tagListTwo, setTagListTwo] = useState<string[]>([]);

  const handleChange = (value: any) => {
    console.log(`selected ${value}`);
  };

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

  const deleteTagItem = (e: any) => {
    const deleteTagItem = e.currentTarget.parentElement.firstChild.innerText;
    const filteredTagList = tagList.filter(
      (tagItem) => tagItem !== deleteTagItem
    );
    setTagList(filteredTagList);
    // target객체 의 유형이 이고 TypeScript에서 허용되지 않는( 활성화된 EventTarget | null경우) nullable 유형의 속성에 액세스하려고 하기 때문에 발생합니다. 유형 가드를 통해서만 strictNullChecks유형을 좁혀서 이 오류를 수정할 수 있습니다
  };
  const deleteTagItemTwo = (e: any) => {
    const deleteTagItemTwo = e.currentTarget.parentElement.firstChild.innerText;
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
  }, []);

  return (
    <div style={{ backgroundColor: "#fcfbfa" }}>
      <S.Wrapper>
        <S.Title>상품 등록</S.Title>
        <S.Form>
          <S.HalfWrapper>
            <S.HalfBox>
              <S.Label>상품명</S.Label>
              <S.Input type="text" placeholder="상품명을 입력하세요."></S.Input>
            </S.HalfBox>
            <S.HalfBox>
              <S.Label>가격</S.Label>
              <S.Input type="text" placeholder="가격을 입력하세요."></S.Input>
            </S.HalfBox>
          </S.HalfWrapper>
          <S.InputWrapper>
            <S.Label>상품 요약</S.Label>
            <S.Input
              type="text"
              placeholder="상품 요약을 입력하세요."
            ></S.Input>
          </S.InputWrapper>
          <S.HalfWrapper>
            <S.SelectWrap>
              <S.Label>옵션명</S.Label>
              <S.SelectBox
                defaultValue="옵션을 선택하세요"
                style={{ width: "100%" }}
                onChange={handleChange}
                className="product-write-select"
                options={[
                  {
                    value: "옵션을 선택하세요",
                    disabled: true,
                    label: "옵션을 선택하세요",
                  },
                  {
                    value: "컬러",
                    label: "컬러",
                  },
                  {
                    value: "사이즈",
                    label: "사이즈",
                  },
                ]}
              />
            </S.SelectWrap>
            <S.OptionBox>
              <S.Label>옵션값</S.Label>
              <S.WholeBox>
                <S.TagBox>
                  {tagList.map((tagItem, index) => {
                    return (
                      <S.TagItem key={index}>
                        <S.Text>{tagItem}</S.Text>
                        <S.Button onClick={deleteTagItem}>✕</S.Button>
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
                defaultValue="옵션을 선택하세요"
                style={{ width: "100%" }}
                onChange={handleChange}
                className="product-write-select"
                options={[
                  {
                    value: "옵션을 선택하세요",
                    disabled: true,
                    label: "옵션을 선택하세요",
                  },
                  {
                    value: "컬러",
                    label: "컬러",
                  },
                  {
                    value: "사이즈",
                    label: "사이즈",
                  },
                ]}
              />
            </S.SelectWrap>
            <S.OptionBox>
              <S.Label>옵션값</S.Label>
              <S.WholeBox>
                <S.TagBox>
                  {tagListTwo.map((tagItemTwo, index) => {
                    return (
                      <S.TagItem key={index}>
                        <S.Text>{tagItemTwo}</S.Text>
                        <S.Button onClick={deleteTagItemTwo}>✕</S.Button>
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
              style={{
                fontSize: "15px",
              }}
              className="quill"
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>상품 사진</S.Label>
            <S.PhotoWrapper>
              <S.PhotoBox>
                <S.Upload type="file" id="upload"></S.Upload>
              </S.PhotoBox>
              <S.PhotoBox>
                <S.Upload type="file" id="upload"></S.Upload>
              </S.PhotoBox>
              <S.PhotoBox>
                <S.Upload type="file" id="upload"></S.Upload>
              </S.PhotoBox>
            </S.PhotoWrapper>
          </S.InputWrapper>
          <S.ButtonBox>
            <S.Cancel>취소</S.Cancel>
            <S.Submit>등록</S.Submit>
          </S.ButtonBox>
        </S.Form>
      </S.Wrapper>
    </div>
  );
}
