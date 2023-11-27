import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Term = createApi({
    reducerPath: "Term",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://13.235.254.27:8000/",
    }),
    endpoints: (builder) => ({
        getAllTerms: builder.query({
            query: () => "api/termANDcondition/get-all",
        }),
    }),
});

export const { useGetAllTermsQuery } = Term;
