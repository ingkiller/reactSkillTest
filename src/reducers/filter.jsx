import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import {ROLES} from "../communs/variables";
import {tasks} from "../data";

const filterSlice = createSlice({
    name: 'app',
    initialState: {search:'',roles:[],status:[]},
    reducers: {
        addSearch(state, action) {
            state.search=action.payload
        },
        addRoles(state, action) {
        },
        addStatus(state,action){

        },
        clearAllFilter(state,action){
            state.search=''
            state.roles=[]
            state.string=[]
        }
    },

})

export const { addSearch,addRoles,addStatus,clearAllFilter} = filterSlice.actions

export default filterSlice.reducer
