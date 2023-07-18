import { AxiosResponse } from "axios";
import { getCookie, server } from "./server";
import { Board, MyBoardList, UsersBoardList } from "@/types/response";

const token = getCookie("Authorization");

export const getEveryGet = async (): Promise<UsersBoardList> => {
  const response = await server.get("/api/boards");
  return response.data;
};
export const getUserGet = async (): Promise<MyBoardList> => {
  const response = await server.get("/api/boards/user");
  return response.data;
};
