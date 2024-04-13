export interface IQuestion {
  Id: number;
  QuestionId: number;
  QuestionTitle: string;
}

export interface IOption {
  Id: number;
  QuestionId: number;
  OptionId: number;
  OptionTitle: string;
  IsAnswer: boolean;
}
