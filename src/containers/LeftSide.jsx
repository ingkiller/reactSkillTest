import React,{useCallback,memo,useState} from "react";
import {useDispatch,useStore} from "react-redux";
import {onFilter,onClear} from "../reducers/app";
import {clearAllFilter,addRoles,addStatus} from "../reducers/filter";
import {ButtonsFilter,Roles,Status} from '../components'

const LeftSide=props=>{

    const store = useStore()
    const dispatch = useDispatch()

    const _onClearFilter=(event)=>{
        dispatch(onClear())
        dispatch(clearAllFilter())
    }
    const _onFilter = (event)=>{
        const {filter}=store.getState()
       // if(filter.search !== "" || filter.roles.length > 0 || filter.status.length > 0)
            dispatch(onFilter(filter))
    }
    const _onselectRole = useCallback((newRole) => {
        dispatch(addRoles(newRole))
    }, []);

    const _onselectStatus= useCallback((newStatus)=>{
        dispatch(addStatus(newStatus))
    },[])

    return <>
        <Roles title={"Roles"} onselectRole={_onselectRole}/>
        <Status title={"Status"} onSelectStatus={_onselectStatus}/>
        <ButtonsFilter clearTxt={"Clear"}
                       filterTxt={"Filter"}
                       onClear={_onClearFilter}
                       onFilter={_onFilter}/>
        </>
}
export default memo(LeftSide)
