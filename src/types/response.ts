interface UploadImage {
  uploadFileName: string;
  storeFileName: string;
}

interface Board {
  board_id: string;
  title: string;
  username: string;
  createdAt: Date;
  modifiedAt: Date;
  uploadImage: UploadImage;
}

type MyBoardList = Board[];

interface UsersBoard {
  board_id: string;
  title: string;
  username: string;
  createdAt: Date;
  modifiedAt: Date;
  image: string;
}

type UsersBoardList = UsersBoard[];
export type { UploadImage, Board, MyBoardList, UsersBoard, UsersBoardList };
