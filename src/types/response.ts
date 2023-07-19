interface UploadImage {
  uploadFileName: string;
  storeFileName: string;
}
type DateTime = [
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  second: number,
  millisecond: number,
];

interface Board {
  id: string;
  title: string;
  username: string;
  createdAt: DateTime;
  modifiedAt: DateTime;
  uploadImage: UploadImage;
}

interface UsersBoard {
  id: string;
  title: string;
  username: string;
  createdAt: DateTime;
  modifiedAt: DateTime;
  image: string;
}

interface Comment {
  id: number;
  username: string;
  createdAt: DateTime;
  modifiedAt: DateTime;
  content: string;
}

interface Post {
  id: number;
  title: string;
  username: string;
  content: string;
  createdAt: DateTime;
  modifiedAt: DateTime;
  // commentList: Comment[];
  uploadImage: UploadImage;
}

interface ApiResponse {
  responseMessage: string;
  statusCode: number;
}

type DelMyBoard = ApiResponse;
type MyBoardList = Board[];
type UsersBoardList = UsersBoard[];
type UserBoardDetails = Post;

export type {
  DelMyBoard,
  UploadImage,
  Board,
  MyBoardList,
  UsersBoard,
  UsersBoardList,
  Post,
  Comment,
  UserBoardDetails,
};