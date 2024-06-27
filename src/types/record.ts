export type RecordType = {
  answerId: string,
  createdAt: string,
  createdBy: string,
  id: number,
  questionId: string,
  recordId: string,
  recordType: 'favorite' | 'unfavorite' | null,
  updatedAt: string,
  updatedBy: string,
  userAnswerId: string
}
