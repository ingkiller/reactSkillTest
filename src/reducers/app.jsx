import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import {ROLES} from "../communs/variables";
import {tasks} from "../data";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        lang: 'en',
        error:false,
        tasks:[],
        status:[],
        roles:[]
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
                rr.push({"role":key,count:count})
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

})

export const { getTasks,getRoles,onFilter,onClear } = appSlice.actions

export default appSlice.reducer
