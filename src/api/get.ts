import { getCookie, server } from "./server";

const token = getCookie("Authorization");
export const getEveryGet = async () => {
  const response = await server.get("/api/boards");
  return response;
};
export const getUserGet = async () => {
  const response = await server.get("/api/boards/user", {
    timeout: 5000,
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};
