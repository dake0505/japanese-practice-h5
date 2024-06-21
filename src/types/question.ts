export type QuestionType = {
  id: number,
  typeId: string,
  typeName: string,
}

export type Question = {
  id: number,
  questionId: string,
  questionTitle: string,
  answerId: string
}

export type Answer = {
  answerId: string,
  answerDesc: string
}

export type QuestionDetail = {
  id: number,
  questionId: string,
  questionTitle: string,
  answerId: string
  answerItems: Answer[]
}
