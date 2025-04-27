declare type SuccessfulResponse<T> = {
  message: string;
} & T;

declare type APIResponse<T> = SuccessfulResponse<T>;
