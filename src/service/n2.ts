import { IResponse } from "../types/common";
import { IQuestion } from "../types/vocabulary";
import http from "../utils/http";
export const queryQuestionList = (): Promise<IResponse<IQuestion[]>> => {
  return http.get('/n2Vocabulary/list');
};
