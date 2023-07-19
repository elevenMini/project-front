import { Avatar } from "@/layout/layoutComponent/header";
import { ThemeProps } from "@/style/theme";
import styled, { keyframes } from "styled-components";

const Skeleton = keyframes`
    0% {
      background-color: rgba(165, 165, 165, 0.3);
    }
    50% {
      background-color: rgba(165, 165, 165, 0.6);
    }
    100% {
      background-color: rgba(165, 165, 165, 0.3);
    }
`;
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
  .ItemContent {
    width: 100%;
    height: 40px;
    padding: 10px 0;
    .content-warrper {
      border-radius: 5px;
      height: 20px;
      animation: ${Skeleton} 1.5s infinite ease-in-out;
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
  animation: ${Skeleton} 1.5s infinite ease-in-out;
  /* box-shadow: 0 0 40px rgba(8, 7, 16, 0.1); */
  border-radius: 15px;
`;

const BoardListMockItem = () => {
  const Mockcontent = (
    <BoardItemContainer>
      <ItemContainer>
        <ItemBox />
        <div className="ItemContent">
          <div className="content-warrper">
            <div className="contents">
              <p className="title"></p>
            </div>
          </div>
        </div>
      </ItemContainer>
    </BoardItemContainer>
  );

  const lastItem = <ItemWrraper>{Mockcontent}</ItemWrraper>;

  return <>{lastItem}</>;
};

export default BoardListMockItem;
