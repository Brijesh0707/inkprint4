import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import user from '../Slice/Slice'
import {Users} from '../authenticationrtk/UsersAuthApi'
import { Contact } from '../contactrtk/ContactRtk'
import {Term} from '../termrtk/TermAndCondition'
import {Private} from '../policyrtk/PrivatePolicy'
// import { curryGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'

export const store = configureStore({
    reducer:{
        [Users.reducerPath]:Users.reducer,
        [Contact.reducerPath]:Contact.reducer,
        [Term.reducerPath]:Term.reducer,
        [Private.reducerPath]:Private.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Users.middleware, Contact.middleware,Term.middleware,Private.middleware),

})

setupListeners(store.dispatch)
