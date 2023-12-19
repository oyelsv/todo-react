import { api } from 'features/core/api';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: ({ ...body }) => ({
        url: 'auth/signup',
        method: 'POST',
        body: {
          ...body,
        },
      }),
      // @ts-ignore
      transformResponse: (response) => response.result,
    }),
  }),
});

export const { useSignupMutation } = authApi;
