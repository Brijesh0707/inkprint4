import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Users = createApi({
  reducerPath: "Users",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://13.235.254.27:8000/", 
  }),
  endpoints: (builder) => ({
    UserRegister: builder.mutation({
      query: (userData) => ({
        url: "/api/user/register/",
        method: "POST",
        body: userData, 
      }),
    }),
    UserLogin:builder.mutation({
        query:(userlogindata) => ({
            url :"/api/user/login/",
            method:"POST",
            body:userlogindata,
        }),
    })
  }),
});

export const { useUserRegisterMutation,useUserLoginMutation } = Users;

