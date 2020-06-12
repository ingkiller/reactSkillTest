import React,{useMemo} from "react";
import {useSelector,useDispatch} from "react-redux";
import {onFilter,onClear} from "../reducers/app";
import {clearAllFilter,addRoles} from "../reducers/filter";
import {ButtonsFilter,Roles} from '../components'

const LeftSide=props=>{

    const {app:{roles},filter}=useSelector(state=>state)
    const dispatch = useDispatch()

    const _onClearFilter=(event)=>{
        dispatch(onClear())
        dispatch(clearAllFilter())
    }
    const _onFilter = (event)=>{
        dispatch(onFilter(filter))
    }
    const _onselectRole=(newRole)=>{
        dispatch(addRoles(newRole))
    }

    const _roles = useMemo(()=>{
        return <Roles title={"Roles"}
                      arrRoles={roles}
                      rolesSelected={filter.roles}
                      onselectRole={_onselectRole}
        />
    },[roles,filter.roles])
    return <>
        {
            _roles
        }
        <div className="my-3"></div>
        <ButtonsFilter clearTxt={"Clear"}
               filterTxt={"Filter"}
               onClear={_onClearFilter}
               onFilter={_onFilter}/>
        </>
}
export default LeftSide
