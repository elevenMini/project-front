import styled from "styled-components";

import { Suspense } from "react";
import { useQuery } from "react-query";
import { getEveryGet, getUserGet } from "@/api/get";
import GalleryListMockItem from "../gallery/gallerylistMockup";

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
  const { data, isError, isLoading, isFetching } = useQuery("todos", getEveryGet);

  const MockUpcontent = [...Array(16)].map(() => {
    return <GalleryListMockItem />;
  });

  return (
    <GetGalleryListContainer>
      <div className="listPostContainer">{MockUpcontent}</div>
    </GetGalleryListContainer>
  );
};
export default GetBoardList;
