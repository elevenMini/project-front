import { getEveryGet, getUserGet } from "@/api/get";
import GetGalleryList from "@/components/gallery/gallerylist";
import { useEffect } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";

const GalleryContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Gallery = () => {
  return (
    <GalleryContainer>
      <GetGalleryList />
    </GalleryContainer>
  );
};
export default Gallery;
