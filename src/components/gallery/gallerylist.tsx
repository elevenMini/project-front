import styled from "styled-components";
import GalleryListMockItem from "./gallerylistMockup";
import { Suspense } from "react";
import { useQuery } from "react-query";
import { getUserGet } from "@/api/get";
import { Board, MyBoardList } from "@/types/response";
import GalleryListItem from "./gallerylistItem";

const GetGalleryListContainer = styled.div`
  width: 100%;
  height: 100%;
  .listPostContainer {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    width: 100%;
    height: 100%;
  }
`;

const GetGalleryList = () => {
  const { data, isError, isFetching } = useQuery<MyBoardList, Error>("gallery", getUserGet);
  console.log(data);
  const MockUpcontent = () =>
    [...Array(16)].map(() => {
      return <GalleryListMockItem />;
    });

  return (
    <GetGalleryListContainer>
      <div className="listPostContainer">
        {data && !isFetching ? (
          data.map((item) => <GalleryListItem key={item.board_id} {...item} />)
        ) : (
          <MockUpcontent />
        )}
      </div>
    </GetGalleryListContainer>
  );
};
export default GetGalleryList;
