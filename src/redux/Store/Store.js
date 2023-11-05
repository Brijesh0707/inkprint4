import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import user from '../Slice/Slice'
import {Users} from '../authenticationrtk/UsersAuthApi'
import { Contact } from '../contactrtk/ContactRtk'
// import { curryGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'

export const store = configureStore({
    reducer:{
        [Users.reducerPath]:Users.reducer,
        [Contact.reducerPath]:Contact.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Users.middleware, Contact.middleware),

})

setupListeners(store.dispatch)
