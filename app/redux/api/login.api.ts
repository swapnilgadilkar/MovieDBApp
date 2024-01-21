import {api} from './api';
import {Access_Token, Request_Token} from './endpoints';

const loginApi = api.injectEndpoints({
  endpoints: builder => ({
    accessToken: builder.mutation({
      query: data => ({
        url: Access_Token,
        method: 'POST',
        body: data,
      }),
    }),
    requestToken: builder.mutation({
      query: data => ({
        url: Request_Token,
        method: 'POST',
        body: data,
      }),
    }),
    deleteToken: builder.mutation({
      query: data => ({
        url: Request_Token,
        method: 'DELETE',
        body: data,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {useAccessTokenMutation} = loginApi;
