import { v4 as uuidv4 } from "uuid";
import { useQuery } from "react-query";
import { getEveryGet } from "@/api/get";
import BoardListMockItem from "./boardlistMockup";
import BoardListItem from "./borderlistitem";
import { GetGalleryListContainer } from "@/style/board/board";

const GetBoardList = () => {
  const { data } = useQuery("getboard", getEveryGet);
  const MockUpcontent = () =>
    [...Array(16)]
      .map((e) => {
        return { ...e, key: uuidv4() };
      })
      .map((e) => {
        return <BoardListMockItem key={e.key} />;
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
