import { getEveryGet, getUserGet } from "@/api/get";
import GetGalleryList from "@/components/gallery/gallerylist";
import { useEffect } from "react";
import styled from "styled-components";

const GalleryContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Gallery = () => {
  useEffect(() => {
    getUserGet().then((res) => console.log(res));
    getEveryGet().then((res) => console.log(res));
  }, []);
  return (
    <GalleryContainer>
      <GetGalleryList />
    </GalleryContainer>
  );
};
export default Gallery;
