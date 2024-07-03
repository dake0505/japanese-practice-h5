export type RecordType = {
  answerId: string,
  createdAt: string,
  createdBy: string,
  id: number,
  questionId: string,
  recordId: string,
  recordType: 'favorite' | 'unfavorite' | 'practice' | null,
  updatedAt: string,
  updatedBy: string,
  userAnswerId: string
}


export type RecordCreateType = {
  QuestionId?: string,
  AnswerId?: string,
  UserAnswerId?: string
  RecordType?: 'favorite' | 'unfavorite' | 'practice' | null,
}
