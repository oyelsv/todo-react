import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

import { IApiResponse } from 'features/core/api/models';

interface IApiErrorResponse {
  status: number;
  data: IApiResponse<void>;
}

export const isSerializedError = (
  error: FetchBaseQueryError | SerializedError
): error is SerializedError => 'name' in error || 'message' in error || 'code' in error;

export const isFetchQueryError = (
  error: FetchBaseQueryError | SerializedError
): error is FetchBaseQueryError => 'data' in error && 'status' in error;

export const isApiErrorResponse = (
  error: FetchBaseQueryError | SerializedError
): error is IApiErrorResponse =>
  isFetchQueryError(error) && typeof error.data === 'object' && 'error' in error.data;
