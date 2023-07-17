import { server } from "@/api/server";
import useImageSelect from "@/hooks/useImageSelect";
import useInput from "@/hooks/useInput";
import { Button, Input } from "@/util";
import { useCallback } from "react";
import styled from "styled-components";

const UploadContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 10px 15px;
  .uploaddiv {
    display: flex;
    gap: 20px;
  }
  .pictureContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-flow: 1;
    width: 100%;
    height: 300px;
    border: 1px dashed gray;
    border-radius: 10px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .pictureContent {
    flex-flow: 1;
    width: 100%;
    height: 100%;
  }
`;

const Upload = () => {
  const [title, onChangeTitleValue] = useInput();
  const [content, onChangeContentValue] = useInput();
  const { inputRef, onUploadImage, onUploadImageButtonClick, previewImage } = useImageSelect();
  const onUploadToServerButtonClick = useCallback(async () => {
    if (!inputRef.current?.files?.[0]) {
      return;
    }

    const formData = new FormData();
    formData.append("image", inputRef.current.files[0]);
    formData.append("title", title);
    formData.append("content", content);

    try {
      const response = await server.post("/api/boards", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [title, content]);

  return (
    <UploadContainer>
      <div className="uploaddiv">
        <div className="pictureContainer">
          <input type="file" ref={inputRef} onChange={onUploadImage} style={{ display: "none" }} />
          {previewImage ? (
            <img src={previewImage} alt="asad" />
          ) : (
            <>
              <p>이미지를 업로드해주세요</p>
              <Button
                color="custom"
                size="small"
                title={<>사진선택</>}
                onClick={onUploadImageButtonClick}
              />
            </>
          )}
        </div>
        <div className="pictureContent">
          <Input
            color="black"
            value={title}
            onChange={onChangeTitleValue}
            InputSize="medium"
            placeholder="제목입력"
          />
          <Input
            color="black"
            value={content}
            onChange={onChangeContentValue}
            InputSize="large"
            placeholder="설명을 입력해주세요"
          />
          <Button
            color="custom"
            size="small"
            title={<>업로드</>}
            onClick={onUploadToServerButtonClick}
          />
        </div>
      </div>
    </UploadContainer>
  );
};
export default Upload;
