import {configureStore} from '@reduxjs/toolkit'
import user from '../Slice/Slice'

const Store = configureStore({
    reducer:{
        users:user.reducer,
    }
})

export default Store