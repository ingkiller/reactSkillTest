import React,{useMemo,useCallback,memo} from "react";
import {useSelector,useDispatch,useStore} from "react-redux";
import {onFilter,onClear} from "../reducers/app";
import {clearAllFilter,addRoles,getFilter} from "../reducers/filter";
import {ButtonsFilter,Roles} from '../components'

const LeftSide=props=>{

  //  const {filter}=useSelector(state=>state)
    const store = useStore()
    const dispatch = useDispatch()

    const _onClearFilter=(event)=>{
        dispatch(onClear())
        dispatch(clearAllFilter())
    }
    const _onFilter = (event)=>{
        const {filter}=store.getState()

        dispatch(onFilter(filter))

    }
    const _onselectRole = useCallback((newRole) => {
        dispatch(addRoles(newRole))
    }, []);

    return <>
        {
            console.log('leftside render')
        }
        <Roles title={"Roles"} onselectRole={_onselectRole}/>
        <ButtonsFilter clearTxt={"Clear"}
                       filterTxt={"Filter"}
                       onClear={_onClearFilter}
                       onFilter={_onFilter}/>
        </>
}
export default memo(LeftSide)
