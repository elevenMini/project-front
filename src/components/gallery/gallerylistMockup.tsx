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
`;

const GalleryItemContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px 5px;
  animation: ${Skeleton} 1.5s infinite ease-in-out;
`;

const ItemBox = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  height: 250px;
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
