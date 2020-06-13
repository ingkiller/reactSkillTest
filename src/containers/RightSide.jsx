import React, {useState, useEffect, useMemo} from "react";
import {debounce} from 'lodash';
import {useSelector,useDispatch} from "react-redux";
import {CellRole, CellStatus, EmployeeItem, FilterCmp} from '../components'
import {addSearch} from "../reducers/filter";

const RightSide=props=>{
    const {app:{tasks},filter:{search}}=useSelector(state=>state)
    const dispatch = useDispatch()
    const [_search,setSearch]=useState(search)


    const _onChangeSearch=event=>{
        /*
        let temp = event.target.value
       debounce(()=>{
           console.log('temp:',temp)
       },1000)()

         */
        setSearch(event.target.value)
        dispatch(addSearch(event.target.value))
    }

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
    return <div className="container-fluid">

        <div className="row ">
            <FilterCmp
                title={"Awesome Cmp"}
                header={header}
                arrTask={tasks}
                search={search}
                onChangeSearch={_onChangeSearch}
            />
        </div>
    </div>
}
export default RightSide
