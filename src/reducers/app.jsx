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


            const {search} = action.payload

            let data = [...state.tasks]
            let result = data.filter(task=>{
                return task.employee.toLowerCase().indexOf(search.toLowerCase()) !== -1?true:false
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
