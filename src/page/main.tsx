import { getCookie } from "@/api/server";
import Carousel from "@/components/home/caroucel";
import Previewlist from "@/components/home/previewlist";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
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
  // 이미지 갤러리 , 보드 리스트 프리패치
  // use인피니티 쿼리 준비 일단은 get으로
  return (
    <MainContainer>
      <Carousel images={WantedImg} />
      {/* 최근게시물 */}
      {/* 내 갤러리 10개 */}
      <Previewlist title={"내 갤러리"} />
      {/* 전체 게시물 10개 */}
      <Previewlist title={"내 게시물"} />
    </MainContainer>
  );
};
export default Main;
