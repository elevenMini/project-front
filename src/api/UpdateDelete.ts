import { DelMyBoard } from "@/types/response";
import { server } from "./server";
import { AxiosResponse } from "axios";

export const deleteBoard = async (boardId: string): Promise<AxiosResponse<DelMyBoard>> => {
  const response = await server.delete(`/api/boards/${boardId}`);
  return response;
};
export const updateBoard = async (boardId: string): Promise<AxiosResponse<DelMyBoard>> => {
  const response = await server.put(`/api/boards/${boardId}`);
  return response;
};
