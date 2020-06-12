import React from "react";
import PropTypes from 'prop-types'
import {TaskItem} from "../index";

const FilterCmp = ({title,header,arrTask,search,onChangeSearch})=>{
    return <div className="container-fluid">

        <div className="row"><h1>{title}</h1></div>
        <div className="row mb-5">
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" value={search} type="search" placeholder="Search" aria-label="Search" onChange={onChangeSearch}/>
            </form>
        </div>
        {arrTask.length > 0?<div className="row">
            <table className="table table-striped">
                <thead>
                <tr>
                    {
                        header.map((item,key)=>(<th key={key} scope="col">{item}</th>))
                    }
                </tr>
                </thead>
                <tbody>
                {
                    [...arrTask].map((task,key)=>(<TaskItem task={task} key={key} index={key+1}/>))
                }
                </tbody>
            </table>
        </div>:<div className="alert alert-danger" role="alert">
            No data to display!!
        </div>}

    </div>
}
FilterCmp.prototype={
    title:PropTypes.string.isRequired,
    header:PropTypes.array.isRequired,
    arrTask:PropTypes.array.isRequired,
    search:PropTypes.string.isRequired,
    onChangeSearch:PropTypes.func.isRequired

}

export default FilterCmp
