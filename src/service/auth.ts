import { IResponse } from "../types/common";
import http from "../utils/http";
export const login = (data: {
  Email: string,
  Password: string
}): Promise<IResponse<{ token : string}>> => {
  return http.post('/auth/login', data);
};
