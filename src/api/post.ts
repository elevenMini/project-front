import { server } from "./server";

export const upload = async () => {
  const response = await server.post("/api/boards", {});
  return response;
};

type signUpProp = {
  username: string;
  password: string;
};
type signInProp = {
  username: string;
  password: string;
};

export const signup = async (params: signUpProp) => {
  const { username, password } = params;
  console.log(username, password);
  const response = await server.post("/api/user/signup", {
    username: `${username}`,
    password: `${password}`,
  });
  return response;
};
export const signin = async (params: signInProp) => {
  const { username, password } = params;
  console.log(username, password);
  const response = await server.post("/api/user/login", {
    username: `${username}`,
    password: `${password}`,
  });

  return response;
};
