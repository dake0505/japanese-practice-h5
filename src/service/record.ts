import { IResponse } from "../types/common";
import { RecordType } from "../types/record";
import http from "../utils/http";

export const queryFavoriteList = (): Promise<IResponse<RecordType[]>> => {
  return http.get('/record/list', {
    params: {
      recordType: 'favorite'
    }
  });
};

export const updateFavoriteItem = (questionId: string): Promise<IResponse<RecordType>> => {
  return http.post('/record/favorite', { QuestionId: questionId });
};
