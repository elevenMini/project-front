import styled from "styled-components";
import GalleryListMockItem from "./gallerylistMockup";

const GetGalleryListContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  .listPostContainer {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`;

const GetGalleryList = () => {
  const MockUpcontent = [...Array(16)].map(() => {
    return <GalleryListMockItem />;
  });

  return (
    <GetGalleryListContainer>
      <div className="listPostContainer">{MockUpcontent}</div>
    </GetGalleryListContainer>
  );
};
export default GetGalleryList;
