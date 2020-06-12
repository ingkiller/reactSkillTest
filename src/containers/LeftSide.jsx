import React from "react";
import {useSelector,useDispatch} from "react-redux";
import {onFilter,onClear} from "../reducers/app";
import {clearAllFilter} from "../reducers/filter";
import {ButtonsFilter} from '../components'

const LeftSide=props=>{

    const {app:{},filter}=useSelector(state=>state)
    const dispatch = useDispatch()
    const _onClearFilter=(event)=>{
        dispatch(onClear())
        dispatch(clearAllFilter())
    }
    const _onFilter = (event)=>{
        dispatch(onFilter(filter))
    }

    return <>
        <h2>left</h2>
        <ButtonsFilter clearTxt={"Clear"}
               filterTxt={"Filter"}
               onClear={_onClearFilter}
               onFilter={_onFilter}/>
        </>
}
export default LeftSide
