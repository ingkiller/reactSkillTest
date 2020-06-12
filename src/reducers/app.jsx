import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import {ROLES} from "../communs/variables";
import {tasks} from "../data";

const requestRoles = createAsyncThunk('REQUEST_ROLES',
    async (arg,{getState,rejectWithValue})=>{
        try {
            //example api call
            /*
            const{employeeId,token}=arg
            let res = await fetch('api_url/endPoint',{
                body:JSON.stringify({id:employeeId}),
                method:'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            if(res.status === 200)
                return await res.json()
            return rejectWithValue({error:true,errorDesc:res.status})
            */

            let rr = []
            for (let [key, value] of Object.entries(ROLES)) {
                let count = 0;
                for(let i = 0;i<tasks.length;i++){

                    let r = tasks[i].roles
                    if(r.indexOf(value) !== -1)
                        count++
                }
                rr.push({role:value,count:count})
            }
            return rr
        }catch (e) {
            return rejectWithValue({error:true,errorDesc:e})
        }

    })

const appSlice = createSlice({
    name: 'app',
    initialState: {
        lang: 'en',
        tasks:[],
        status:[],
        roles:[],
        isFetching:false,
        error:false,
    },
    reducers: {
        getRoles(state, action) {
            let rr = []
            for (let [key, value] of Object.entries(ROLES)) {
                let count = 0;
                for(let i = 0;i<tasks.length;i++){

                    let r = tasks[i].roles
                    if(r.indexOf(value) !== -1)
                        count++
                }
                rr.push({role:value,count:count})
            }
            state.roles = rr
        },
        getStatus(state, action) {
        },
        getTasks(state,action){
            state.tasks = tasks
        },
        onFilter(state,action){

            const {search,roles} = action.payload

            let data = [...state.tasks]
            let result = data.filter(task=>{
                if(search !== ''){
                    if(task.employee.toLowerCase().indexOf(search.toLowerCase()) !== -1)
                        return true
                }

                let flag = true
                    for(let i = 0;i< roles.length;i++){
                        let tRoles = task.roles.map(item=>item.toLowerCase())
                        if(tRoles.indexOf(roles[i].toLowerCase()) === -1)
                            flag = false
                    }
                return flag


                return false
            })

            state.tasks = result
        },
        onClear(state,action){
            state.tasks = tasks
        }
    },
    extraReducers:{
        [requestRoles.pending]:state=>{
            state.isFetching=true
            state.error=false
        },
        [requestRoles.fulfilled]:(state,action)=>{
            state.isFetching=false
            state.error=false
            state.roles = action.payload
        },
        [requestRoles.rejected]:(state,action)=>{
            state.isFetching=false
            state.error = action.payload
        }
    }

})

export const { getTasks,getRoles,onFilter,onClear } = appSlice.actions
export {requestRoles}
export default appSlice.reducer
