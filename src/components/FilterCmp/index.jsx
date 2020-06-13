import React, {useMemo} from "react";
import PropTypes from 'prop-types'
import DataTable from 'react-data-table-component';
import {TaskItem,EmployeeItem,SearchBar,CellRole,CellStatus} from "../index";

const FilterCmp = ({title,header,arrTask,search,onChangeSearch})=>{
    return <div className="container-fluid">

        <div className="row"><h1>{title}</h1></div>

        <div className="row mb-2">
            <DataTable
                title={ <SearchBar search={search} onChange={onChangeSearch}/>}
                columns={header}
                data={arrTask}
            />
        </div>

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
