import {
  BaseQueryApi,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import {RootState} from '../store';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.themoviedb.org/3',
  credentials: 'include',
  prepareHeaders: (headers, {getState, endpoint}) => {
    // headers.set("authorization","token");
    return headers;
  },
});

const baseQueryWithReAuth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: unknown,
) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 401) {
    const accessToken = (api.getState() as RootState)?.app?.accessToken;
    const refreshToken = (api.getState() as RootState).app?.refreshToken;
    const refreshResult = await baseQuery(
      {
        url: '',
        method: 'POST',
        body: {
          accessToken,
          refreshToken,
        },
        api,
        extraOptions,
      },
      api,
      extraOptions,
    );
    if (refreshResult) {
      // api.dispatch() store the new token
      result = await baseQuery(args, api, extraOptions);
    } else {
      // api.dispatch();  else logout
    }
  }
  return result;
};

const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: () => ({}),
});

export {apiSlice as api};
