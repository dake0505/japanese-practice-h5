export interface IResponse<T> {
  code: number;
  response_key: string;
  response_message: string;
  data: T;
}
