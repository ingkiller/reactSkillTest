import React,{useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {FilterCmp} from '../components'
import {addSearch} from "../reducers/filter";

const RightSide=props=>{
    const {app:{tasks},filter:{search}}=useSelector(state=>state)
    const dispatch = useDispatch()
    const [_search,setSearch]=useState('')


    useEffect(()=>{
        setSearch(search)
        console.log('filter:',search)
    },[search])
    const _onChangeSearch=event=>{
        setSearch(event.target.value)
        dispatch(addSearch(event.target.value))
    }
    return <div className="container-fluid">
        <div className="row ">
            <FilterCmp
                title={"Awesome Cmp"}
                header={['#','Employee','Roles','Status']}
                arrTask={tasks}
                search={search}
                onChangeSearch={_onChangeSearch}
            />

        </div>
    </div>
}
export default RightSide
