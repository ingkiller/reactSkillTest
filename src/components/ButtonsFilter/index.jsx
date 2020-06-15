import React,{memo} from "react";
import PropTypes from 'prop-types'

const ButtonsFilter=({clearTxt,filterTxt,onClear,onFilter})=>{
    return <div className="flex-row pr-2">
        <button className="btn btn-primary" onClick={onFilter}>{filterTxt}</button>
        <button className="btn btn-outline-secondary float-right" onClick={onClear}>{clearTxt}</button>
    </div>
}
ButtonsFilter.prototype={
    clearTxt:PropTypes.string.isRequired,
    filterTxt:PropTypes.string.isRequired,
    onClear:PropTypes.func.isRequired,
    onFilter:PropTypes.func.isRequired
}
export default memo(ButtonsFilter)
