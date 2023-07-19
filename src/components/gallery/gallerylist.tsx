import styled from "styled-components";
import GalleryListMockItem from "./gallerylistMockup";
import { useQuery } from "react-query";
import { getUserGet } from "@/api/get";
import { MyBoardList } from "@/types/response";
import GalleryListItem from "./gallerylistItem";
import { v4 as uuidv4 } from "uuid";
const GetGalleryListContainer = styled.div`
  .listPostContainer {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    /* justify-content: flex-start; */
    align-items: stretch; // Add this
    align-content: stretch; // Add this
  }
`;

const GetGalleryList = () => {
  const { data } = useQuery<MyBoardList, Error>("gallery", getUserGet);
  const MockUpcontent = () =>
    [...Array(16)]
      .map((e) => (e = { ...e, id: uuidv4() }))
      .map((e) => {
        return <GalleryListMockItem key={e.id} />;
      });

  return (
    <GetGalleryListContainer>
      <div className="listPostContainer">
        {data ? data.map((item) => <GalleryListItem key={item.id} {...item} />) : <MockUpcontent />}
      </div>
    </GetGalleryListContainer>
  );
};
export default GetGalleryList;
