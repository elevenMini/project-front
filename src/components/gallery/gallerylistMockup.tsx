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
const GalleryItemContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px 5px;
  animation: ${Skeleton} 1.5s infinite ease-in-out;
`;

const ItemWrraper = styled.div`
  width: 25%;
  height: auto;
  padding: 5px;
`;
const ItemBox = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  /* box-shadow: 0 0 40px rgba(8, 7, 16, 0.1); */
  border-radius: 15px;
`;
const ItemContainer = styled.div`
  perspective: 1000px;
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

const GalleryListMockItem = () => {
  const Mockcontent = (
    <GalleryItemContainer>
      <ItemContainer>
        <ItemBox />
      </ItemContainer>
    </GalleryItemContainer>
  );

  const lastItem = <ItemWrraper>{Mockcontent}</ItemWrraper>;

  return <>{lastItem}</>;
};

export default GalleryListMockItem;
