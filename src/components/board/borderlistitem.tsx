import { Avatar } from "@/layout/layoutComponent/header";
import { ThemeProps } from "@/style/theme";
import { DateTime, UsersBoard } from "@/types/response";
import styled, { keyframes } from "styled-components";

const ItemWrraper = styled.div<ThemeProps>`
  width: 25%;
  @media ${(props) => props.theme.size.large} {
    width: 33%;
  }
  @media ${(props) => props.theme.size.small} {
    width: 100%;
  }
  margin: 0;
  padding: 2px 2px;
  margin-bottom: 10px;
`;

const BoardItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 5px 5px;
`;
const ItemContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    .itemBox {
      border: 3px solid #5585e8;
    }
  }
  .ItemContent {
    width: 100%;
    height: 40px;
    padding: 10px 0;
    .content-warrper {
      display: flex;
      border-radius: 5px;
      height: 40px;
      .contents {
        display: flex;
        height: 100%;
        gap: 2px;
        padding: 0 0 0 10px;
        flex-direction: column;
        justify-content: center;
        .created {
          font-size: 11px;
          font-weight: 500;
        }
        .title {
          font-size: 15px;
          font-weight: 500;
        }
      }
    }
  }
`;

const ItemBox = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.8);
  transition: all 0.2s;
  .board-img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const BoardListItem: React.FC<UsersBoard> = (props) => {
  const { uploadImage, title, username, createdAt } = props;

  const convertToJSDate = (dateTime: DateTime): Date => {
    const [year, month, day, hour, minute, second] = dateTime;
    return new Date(year, month - 1, day, hour + 9, minute, second, 0);
  };

  const getTimeAgo = (dateTime: DateTime): string => {
    const date = convertToJSDate(dateTime);
    const now = new Date();

    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}일 전`;
    if (hours > 0) return `${hours}시간 전`;
    if (minutes > 0) return `${minutes}분 전`;
    return `${seconds}초 전`;
  };

  console.log(createdAt);
  const Mockcontent = (
    <BoardItemContainer>
      <ItemContainer>
        <ItemBox className="itemBox">
          <img src={uploadImage?.storeFileName} alt="이미지누락" className="board-img" />
        </ItemBox>
        <div className="ItemContent">
          <div className="content-warrper">
            <Avatar />
            <div className="contents">
              <p className="title">{title}</p>
              <p className="created">{createdAt ? getTimeAgo(createdAt) : ""}</p>
            </div>
          </div>
        </div>
      </ItemContainer>
    </BoardItemContainer>
  );

  const lastItem = <ItemWrraper>{Mockcontent}</ItemWrraper>;

  return <>{lastItem}</>;
};

export default BoardListItem;
