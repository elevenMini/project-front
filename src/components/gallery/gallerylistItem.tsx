import { ThemeProps } from "@/style/theme";
import { Board } from "@/types/response";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const ItemWrraper = styled.div<ThemeProps>`
  width: 25%;
  @media ${(props) => props.theme.size.large} {
    width: 33%;
  }
  @media ${(props) => props.theme.size.small} {
    width: 100%;
  }
  margin: 0;
`;

const GalleryItemContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1px;
`;

const ItemBox = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  background-color: rgba(0, 0, 0, 0.9);
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    transform: scale(1);
    transition: all 0.5s;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const GalleryListItem: React.FC<Board> = (props) => {
  const { username, uploadImage, id } = props;
  const navigate = useNavigate();
  const onDetailsPageNavigate = () => {
    navigate(`/gallery/${id}`);
  };
  const lastItem = (
    <ItemWrraper>
      <GalleryItemContainer>
        <ItemBox>
          <img src={uploadImage.storeFileName} alt="aa" onClick={onDetailsPageNavigate} />
        </ItemBox>
      </GalleryItemContainer>
    </ItemWrraper>
  );

  return lastItem;
};

export default GalleryListItem;
