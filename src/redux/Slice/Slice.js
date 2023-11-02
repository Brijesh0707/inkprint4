import {createSlice} from '@reduxjs/toolkit'

const user = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        LoggedUser(state,action){},
    }
})

export default user;