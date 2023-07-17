import { getCookie } from "@/api/server";
import Carousel from "@/components/home/caroucel";
import Previewlist from "@/components/home/previewlist";
import { useEffect } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const WantedImg = [
  "https://static.wanted.co.kr/images/banners/1489/312a0c29.jpg",
  "https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg",
  "https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg",
  "https://static.wanted.co.kr/images/banners/1490/0b775035.jpg",
  "https://static.wanted.co.kr/images/banners/1484/b2853456.jpg",
  "https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg",
  "https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg",
  "https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg",
  "https://static.wanted.co.kr/images/banners/1488/baa54448.jpg",
];
const Main = () => {
  useEffect(() => {
    console.log(getCookie());
    console.log(document.cookie);
  }, []);

  return (
    <MainContainer>
      <Carousel images={WantedImg} />
      {/* 최근게시물 */}
      {/* 내 갤러리 5개 */}
      <Previewlist />
      {/* 전체 게시물 5개 */}
      <Previewlist />
    </MainContainer>
  );
};
export default Main;
