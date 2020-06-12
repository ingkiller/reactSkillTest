import React from "react";
import PropTypes from 'prop-types'

const ButtonsFilter=({clearTxt,filterTxt,onClear,onFilter})=>{
    return <div className="flex-row pr-2">
        <button className="btn btn-outline-secondary" onClick={onClear}>{clearTxt}</button>
        <button className="btn btn-primary float-right" onClick={onFilter}>{filterTxt}</button>
    </div>
}
ButtonsFilter.prototype={
    clearTxt:PropTypes.string.isRequired,
    filterTxt:PropTypes.string.isRequired,
    onClear:PropTypes.func.isRequired,
    onFilter:PropTypes.func.isRequired
}
export default ButtonsFilter
