import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
    name: 'app',
    initialState: {search:'',roles:[],status:[]},
    reducers: {
        getFilter(state,action){
             state=state
        },
        addSearch(state, action) {
            state.search=action.payload
        },
        addRoles(state, action) {
            let roleName = action.payload
            let rolesSelected = [...state.roles]
            let index = rolesSelected.indexOf(roleName)
            if(index === -1){
                rolesSelected.push(roleName)
            }else {
                rolesSelected = rolesSelected.filter(elem => elem !== roleName)
            }
            state.roles=rolesSelected
        },
        addStatus(state,action){
            let statusName = action.payload
            let statusSelected = [...state.status]
            let index = statusSelected.indexOf(statusName)
            if(index === -1){
                statusSelected.push(statusName)
            }else{
                statusSelected = statusSelected.filter(elem => elem !== statusName)
            }
            state.status=statusSelected
        },
        clearAllFilter(state,action){
            state.search=''
            state.roles=[]
            state.status=[]
        }
    },

})

export const { addSearch,addRoles,addStatus,clearAllFilter,getFilter} = filterSlice.actions

export default filterSlice.reducer
