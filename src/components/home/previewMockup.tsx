import styled, { keyframes } from "styled-components";
import { v4 as uuidv4 } from "uuid";
interface PreviewList {
  list: [];
}
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
const ItemContainer = styled.div`
  width: 20%;
  padding: 5px;
  .item-wrraper {
    display: flex;
    flex-direction: column;
    .item-img-container {
      background-color: #eee;
      border-radius: 8px;
      box-sizing: border-box;
      overflow: hidden;
      padding-top: 75%;
      position: relative;
      width: 100%;
      animation: ${Skeleton} 1.5s infinite ease-in-out;
    }
    .item-title-container {
      flex: 0;
      max-width: 100%;
      width: 60%;
      height: 8px;
      background-color: #eee;
      animation: ${Skeleton} 1.5s infinite ease-in-out;
      text-overflow: ellipsis;
      border-radius: 8px;
      margin-top: 10px;

      .mock-title {
        width: 60%;
        height: 10px;
        font-weight: 600;
        text-align: start;
        font-size: 1.1rem;
        line-height: 2.2rem;
      }
    }
  }
`;
const PreviewMockup = () => {
  const ItemContent = (key: string) => (
    <ItemContainer key={key}>
      <div className="item-wrraper">
        <div className="item-img-container"></div>
        <div className="item-title-container">
          <div className="mock-title"></div>
        </div>
      </div>
    </ItemContainer>
  );

  return (
    <>
      {[...Array(5)]
        .map((e) => {
          return { key: uuidv4() };
        })
        .map((e) => ItemContent(e.key))}
    </>
  );
};
export default PreviewMockup;
