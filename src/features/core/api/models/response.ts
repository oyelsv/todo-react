export interface IApiValidationError {
  message: string;
  members: string[];
}

export interface IApiError {
  code: number;
  message: string;
  details: string | null;
  validationErrors: Array<IApiValidationError> | null;
}

export interface IApiResponse<R> {
  result: R | null;
  success: boolean;
  error: IApiError | null;
  unAuthorizedRequest: boolean;
}
