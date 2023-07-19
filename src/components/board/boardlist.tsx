import styled from "styled-components";

import { Suspense } from "react";
import { useQuery } from "react-query";
import { getEveryGet, getUserGet } from "@/api/get";
import GalleryListMockItem from "../gallery/gallerylistMockup";
import BoardListMockItem from "./boardlistMockup";
import BoardListItem from "./borderlistitem";

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

const GetBoardList = () => {
  const { data, isError, isLoading, isFetching } = useQuery("getboard", getEveryGet);
  console.log(data);
  const MockUpcontent = () =>
    [...Array(16)].map(() => {
      return <BoardListMockItem />;
    });

  return (
    <GetGalleryListContainer>
      <div className="listPostContainer">
        {data ? data.map((item) => <BoardListItem key={item.id} {...item} />) : <MockUpcontent />}
      </div>
    </GetGalleryListContainer>
  );
};
export default GetBoardList;
