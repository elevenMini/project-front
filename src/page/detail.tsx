import { deleteBoard } from "@/api/UpdateDelete";
import { getDetailBoard } from "@/api/get";
import { close } from "@/assets/icon/icons";
import useInput from "@/hooks/useInput";
import { useAppSelector } from "@/hooks/useRedux";
import ErrorPage from "@/routes/404";
import { Button, Icon, Input } from "@/util";
import Spinner from "@/util/spinner";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
interface DetailContainerProps {
  updateFormToggle: boolean;
}
const DetailContainer = styled.div<DetailContainerProps>`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 2rem 0 2rem 2rem;
  .content-wrapper {
    display: flex;
    padding: 0 10px;
    flex-direction: column;
    .usersetting {
      display: flex;
      justify-content: flex-end;
      padding: 1px 5px;
      gap: 10px;
      .button {
        font-size: 14px;
        cursor: pointer;
        &:hover {
          color: #5585e8;
        }
      }
    }
  }
  .content-wrapper,
  .img-wrraper {
    flex: 1;
  }
  .img-container {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    img {
      position: absolute;
      object-fit: contain;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    .icon-container {
      .icon {
        position: absolute;
        margin: 5px;
        top: 0;
        width: 30px;
        height: 30px;
        object-fit: cover;
        z-index: 10;
      }
    }
  }
  .contents {
    padding: 10px 5px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    textarea {
      width: 100%;
      height: 100%;
      padding: 10px;
      box-sizing: border-box;
      border: ${(props) => (props.updateFormToggle ? "solid 2px #1e90ff" : "none")};
      border-radius: 5px;
      font-size: 16px;
      resize: none;
    }
    .update-button {
      display: flex;
      justify-content: flex-end;
      padding: 10px;
      gap: 10px;
    }
  }
`;
const Detail = () => {
  const { id } = useParams();
  const user = useAppSelector((state) => state.user.id);
  const {
    data: images,
    isSuccess,
    error,
  } = useQuery(["imageDetail", id], () => getDetailBoard(id), { keepPreviousData: true });
  const navigate = useNavigate();
  const [title, onChangeTitle, setTitle] = useInput();
  const [content, onChangeContent, setContent] = useInput();
  const [updateFormToggle, setUpdateFormToggle] = useState<boolean>(false);
  const [delLoading, setDelLoading] = useState(false);
  useEffect(() => {
    if (images) {
      setTitle(images.title);
      setContent(images.content);
    }
  }, [isSuccess]);

  const deleteButtonHandler = async () => {
    setDelLoading(true);
    await deleteBoard(`${images.id}`)
      .then((res) => {
        console.log(res);
        if (res.data.statusCode === 200) {
          alert(res.data.responseMessage);
          navigate("/gallery");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("오류발생");
      })
      .finally(() => setDelLoading(false));
  };

  const setCancleHandler = () => {
    setTitle(images?.title);
    setContent(images?.content);
    setUpdateFormToggle(false);
  };

  if (error) {
    return <ErrorPage />;
  }
  return (
    <>
      {images && (
        <DetailContainer updateFormToggle={updateFormToggle}>
          <div className="img-wrraper">
            <div className="img-container">
              <img src={images.uploadImage.storeFileName} alt="asdasd" />
              {updateFormToggle && (
                <div className="icon-container">
                  <Icon src={close} alt="" className="icon" />
                </div>
              )}
            </div>
          </div>
          <div className="content-wrapper">
            {user === images.username && (
              <div className="usersetting">
                {!updateFormToggle && (
                  <div className="button" onClick={() => setUpdateFormToggle(true)}>
                    수정
                  </div>
                )}
                <div className="button" onClick={deleteButtonHandler}>
                  {delLoading ? (
                    <Spinner color="#000" spinColor="gray" size={15} borderSize={2} />
                  ) : (
                    "삭제"
                  )}
                </div>
              </div>
            )}
            <div className="contents">
              <Input
                color="black"
                valueSize={24}
                value={title}
                onChange={onChangeTitle}
                InputSize="medium"
                disabled={!updateFormToggle}
                placeholder="제목입력"
              />
              <textarea
                color="black"
                value={content}
                onChange={onChangeContent}
                disabled={!updateFormToggle}
                // InputSize="large"
                placeholder="설명을 입력해주세요"
              />

              {updateFormToggle ? (
                <div className="update-button">
                  <Button
                    color="custom"
                    size="small"
                    title={<>완료</>}
                    onClick={() => setUpdateFormToggle(false)}
                  />
                  <Button
                    color="custom"
                    size="small"
                    title={<>취소</>}
                    onClick={setCancleHandler}
                  />
                </div>
              ) : (
                <div className="update-button">
                  <Button
                    color="custom"
                    size="small"
                    title={<>뒤로가기</>}
                    onClick={() => navigate(-1)}
                  />
                </div>
              )}
            </div>
          </div>
        </DetailContainer>
      )}
    </>
  );
};
export default Detail;
