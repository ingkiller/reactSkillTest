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
            let roleName = action.payload
            let rolesSelected = [...state.roles]

            let index = rolesSelected.indexOf(roleName)
            if(index === -1){
                rolesSelected.push(roleName)
            }else
            {
                rolesSelected = rolesSelected.filter(elem => elem !== roleName)
            }
            state.roles=rolesSelected
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
