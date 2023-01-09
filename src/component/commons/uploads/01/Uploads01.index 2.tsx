import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import { checkValidationImage } from "./Uploads01.validation";
import { IUploads01Props } from "./Uploads01.types";
import { UPLOAD_IMAGE } from "./Uploads01.queries";
import { Modal } from "antd";
import * as S from "./Uploads01.styles";

export default function Uploads01(props: IUploads01Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadImage] = useMutation(UPLOAD_IMAGE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const images = checkValidationImage(event.target.files?.[0]);
    if (!images) return;

    try {
      const result = await uploadImage({ variables: { images } });
      props.onChangeFileUrls(result.data.uploadImage, props.index);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      {props.fileUrl ? (
        <S.UploadImage
          onClick={onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <S.UploadButton onClick={onClickUpload} type="button">
          <>+</>
        </S.UploadButton>
      )}
      <S.UploadFileHidden type="file" ref={fileRef} onChange={onChangeFile} />
    </>
  );
}
