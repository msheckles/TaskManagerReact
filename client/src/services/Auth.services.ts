import { ILoginType } from "../types/Auth.types";
import { postRequest } from "../utils/axiosConfig";
import { auth_urls } from "../utils/urls/urls";

export const LoginAPI = (data: ILoginType) => {
  return postRequest(auth_urls.login, data);
};
