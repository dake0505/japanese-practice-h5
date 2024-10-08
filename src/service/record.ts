import { IResponse } from "../types/common";
import { RecordCreateType, RecordType } from "../types/record";
import http from "../utils/http";

export const queryFavoriteList = (): Promise<IResponse<RecordType[]>> => {
  return http.get('/record/list', {
    params: {
      recordType: 'favorite'
    }
  });
};

export const queryMistakeList = (): Promise<IResponse<RecordType[]>> => {
  return http.get('/record/list', {
    params: {
      recordType: 'practice'
    }
  });
};

export const updateFavoriteItem = (questionId: string): Promise<IResponse<RecordType>> => {
  return http.post('/record/favorite', { QuestionId: questionId });
};

export const createRecord = (data: RecordCreateType): Promise<IResponse<RecordType>> => {
  return http.post('/record/create', data);
};
