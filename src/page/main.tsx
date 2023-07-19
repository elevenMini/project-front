import { getCookie } from "@/api/server";
import { eleven, eun, hyun, soon } from "@/assets/img";
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
const WantedImg = [eun, hyun, soon, eleven];
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
