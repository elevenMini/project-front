import { getBoardTopFive, getUserTopFive } from "@/api/get";
import { eleven, eun, hyun, soon } from "@/assets/img";
import Carousel from "@/components/home/caroucel";
import Previewlist from "@/components/home/previewlist";
import { useQuery } from "react-query";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
`;
const WantedImg = [eun, hyun, soon, eleven];

const Main = () => {
  // 이미지 갤러리 , 보드 리스트 프리패치
  const {
    data: BoardTopfiveData,
    isError: BoardTopfiveError,
    isLoading: BoardTopfiveLoading,
    isFetching: BoardTopfiveIsFetching,
  } = useQuery("getboardTopFive", getBoardTopFive);
  const {
    data: UserTopfiveData,
    isError: UserTopfiveError,
    isLoading: UserTopfiveLoading,
    isFetching: UserTopfiveIsFetching,
  } = useQuery("getuserTopFive", getUserTopFive);

  return (
    <MainContainer>
      <Carousel images={WantedImg} />
      <Previewlist title={"내 갤러리"} />
      <Previewlist title={"전체 게시물"} />
    </MainContainer>
  );
};
export default Main;
