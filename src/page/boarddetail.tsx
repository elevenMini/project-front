import { useParams } from "react-router-dom";

const BoardDetail = () => {
  const { boardId } = useParams();
  return <div>BoardDetail + {boardId}</div>;
};
export default BoardDetail;
