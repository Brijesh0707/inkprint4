import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Contact = createApi({
    reducerPath:"Contact",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://13.235.254.27:8000/", 
    }),
    endpoints:(builder)=>({
        Contact:builder.mutation({
            query:(contact)=>({
                url:"/api/contact_us/create/",
                method:"POST",
                body:contact,
            }),
        }),
    })
})

export const {useContactMutation} = Contact