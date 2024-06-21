import { IResponse } from "../types/common";
import { Question, QuestionDetail, QuestionType } from "../types/question";
import http from "../utils/http";


export const queryQuestionType = (): Promise<IResponse<QuestionType[]>> => {
  return http.get('/type/list');
};


export const queryQuestionList = (): Promise<IResponse<Question[]>> => {
  return http.get('/item/list');
};

export const queryQuestionDetail = (id: number): Promise<IResponse<QuestionDetail>> => {
  return http.get('/item/detail', { params: { id } });
};
