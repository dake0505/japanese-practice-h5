import { IResponse } from "../types/common";
import { IOption, IQuestion } from "../types/vocabulary";
import http from "../utils/http";
export const queryQuestionList = (): Promise<IResponse<IQuestion[]>> => {
  return http.get('/n2Vocabulary/list');
};

export const queryQuestionById = (id: number): Promise<IResponse<IOption[]>> => {
  return http.get(`/n2Vocabulary/${id}`);
};


export const queryNextQuestion = (id: number): Promise<IResponse<IQuestion>> => {
  return http.get(`/operation/next/${id}`);
};

export const queryPreQuestion = (id: number): Promise<IResponse<IQuestion>> => {
  return http.get(`/operation/pre/${id}`);
};
