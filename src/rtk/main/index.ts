// src/api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../../config'

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }), // Replace with your API base URL
  endpoints: (builder) => ({
    login: builder.mutation<{}, { state_id: string }>({
      query: (body) => ({
        url: "/login/social",
        method: 'POST',
        body
      })
    }),
    registration: builder.mutation<{}, { state_id: string; social: "google" }>({
      query: (body) => ({
        url: "/user/register/email",
        method: 'POST',
        body
      })
    }),
    getUserInfo: builder.query<{}, undefined>({
      query: () => ({
        url: "/user/info",
        method: 'GET'
      })
    }),
    postUserInfo: builder.mutation<{}, { source: string; display_as: string; content: string }>({
      query: () => ({
        url: "/user/info",
        method: 'POST'
      })
    }),
    getUserInfoByUserId: builder.query<{}, { user_id: string; lang: string }>({
      query: ({ user_id }) => ({
        url: `/user/${user_id}/profile`,
        method: 'GET'
      })
    }),
    getCategories: builder.query<{}, { lang: string }>({
      query: ({ lang }) => ({
        url: `/categories/search?lang=${lang}`,
        method: 'GET'
      })
    }),
    tagsPostSearch: builder.mutation<{}, { ids: string[]; lang: string; key: string; keys: string[]; indexes: string[]; category_ids: string[] }>({
      query: (body) => ({
        url: "/tags/search",
        method: 'POST',
        body
      })
    }),
    tagsPostSearchSimple: builder.mutation<{}, { ids: string[]; lang: string; key: string; keys: string[]; indexes: string[]; category_ids: string[] }>({
      query: (body) => ({
        url: "/tags/search/simple",
        method: 'POST',
        body
      })
    }),
    tagsGetAlias: builder.query<{}, { ids: string[]; lang: string; key: string; keys: string[]; indexes: string[]; category_ids: string[] }>({
      query: (body) => ({
        url: `/tags/alias?${Object.entries(body).reduce(
          (prev, curr) => `${prev !== "" ? prev + "&" : prev}` + (typeof curr[1] === 'string' ? `${curr[0]}=${curr[1]}` : curr[1].map(value => `${curr[0]}=${value}`).join("&")), ""
        )}`,
        method: 'GET',
        body
      })
    }),
  }),
});

export const {
  // Queries
  useGetCategoriesQuery,
  useGetUserInfoQuery,
  useGetUserInfoByUserIdQuery,
  useTagsGetAliasQuery,
  // Mutations
  useLoginMutation,
  usePostUserInfoMutation,
  useRegistrationMutation,
  useTagsPostSearchMutation,
  useTagsPostSearchSimpleMutation,
} = api;
