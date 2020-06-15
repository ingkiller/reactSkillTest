import React, {useState, useEffect, useMemo,memo} from "react";
import {useSelector,useDispatch} from "react-redux";
import {CellRole, CellStatus, EmployeeItem, FilterCmp} from '../components'
import {getTasks} from "../reducers/app";
const RightSide=props=>{
    const tasks=useSelector(state=>state.app.tasks)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getTasks())
    },[])

    const header = useMemo(()=>[
        {
            name: 'Employee',
            cell:row=><EmployeeItem name={row.employee}/>
        },
        {
            name: 'Roles',
            cell:row=><CellRole role={row.roles}/>
        },
        {
            name: 'Status',
            cell:row=><CellStatus status={row.status}/>
        }
    ],[])

    const _tasks=useMemo(()=>tasks,[tasks])
    return <div className="container-fluid">
        <div className="row ">
            {
                <FilterCmp
                    title={"Awesome Cmp"}
                    header={header}
                    tasks={_tasks}
                />
            }
        </div>
    </div>
}
export default memo(RightSide)
