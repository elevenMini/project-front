import styled, { keyframes } from "styled-components";

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
const PreviewContainer = styled.div`
  position: relative;
  .preview-list {
    width: 100%;
    height: 100%;
    padding-bottom: 120px;
    padding-top: 16px;
    .list-view-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      height: 100%;
      width: 100%;
    }
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
  const ItemContent = (
    <ItemContainer>
      <div className="item-wrraper">
        <div className="item-img-container"></div>
        <div className="item-title-container">
          <div className="mock-title"></div>
        </div>
      </div>
    </ItemContainer>
  );

  return <>{[...Array(10)].map((e) => ItemContent)}</>;
};
export default PreviewMockup;
