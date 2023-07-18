import { ThemeProps } from "@/style/theme";
import { Board } from "@/types/response";
import styled, { keyframes } from "styled-components";

const ItemWrraper = styled.div<ThemeProps>`
  width: 25%;
  @media ${(props) => props.theme.size.large} {
    width: 33%;
  }
  @media ${(props) => props.theme.size.small} {
    width: 50%;
  }
  max-height: 250px;
`;

const GalleryItemContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2px 1.5px;
`;

const ItemBox = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #bbb;
  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const GalleryListItem: React.FC<Board> = (props) => {
  const { username, uploadImage } = props;

  const lastItem = (
    <ItemWrraper>
      <GalleryItemContainer>
        <ItemBox>
          <img src={uploadImage.storeFileName} alt="aa" />
        </ItemBox>
      </GalleryItemContainer>
    </ItemWrraper>
  );

  return <>{lastItem}</>;
};

export default GalleryListItem;
