import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Private = createApi({
    reducerPath: "Private",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://13.126.148.173:8000",
    }),
    endpoints: (builder) => ({
        getAllPrivate: builder.query({
            query: () => "/api/privatePolicy/get-all/",
        }),
    }),
});

export const { useGetAllPrivateQuery } = Private;
