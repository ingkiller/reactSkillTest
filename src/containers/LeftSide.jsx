import React from "react";
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

        console.log('_onselectRole:',newRole)
        dispatch(addRoles(newRole))
    }
    return <>
        <Roles title={"Roles"}
               arrRoles={roles}
               rolesSelected={filter.roles}
               onselectRole={_onselectRole}
        />
        <div className="my-3"></div>
        <ButtonsFilter clearTxt={"Clear"}
               filterTxt={"Filter"}
               onClear={_onClearFilter}
               onFilter={_onFilter}/>
        </>
}
export default LeftSide
