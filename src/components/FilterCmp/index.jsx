import React, {useMemo,memo} from "react";
import PropTypes from 'prop-types'
import DataTable from 'react-data-table-component';
import {useSelector,useDispatch} from "react-redux";
import {TaskItem,EmployeeItem,SearchBar,CellRole,CellStatus} from "../index";

const FilterCmp = ({title,header,tasks})=>{


    return <div className="container-fluid">

        <div className="row"><h1>{title}</h1></div>

        <div className="row mb-2">
            <DataTable
                title={ <SearchBar/>}
                columns={header}
                data={tasks}
            />
        </div>

    </div>
}
/*

 */
FilterCmp.prototype={
    title:PropTypes.string.isRequired,
    header:PropTypes.array.isRequired,
}

export default memo(FilterCmp)
