import React from "react";
import PropTypes from 'prop-types'
import {EmployeeItem} from "../index";
const TaskItem = ({task,index})=>{
    return <tr>
        <th scope="row">{index}</th>
        <td><EmployeeItem name={task.employee}/></td>

    </tr>
}
/*
 <td>{task.roles.toString()}</td>
        <td>{task.status.status !== undefined ? task.status.status:task.status}</td>
 */
TaskItem.prototype={
    task:PropTypes.object.isRequired,
    index:PropTypes.number.isRequired
}
export default TaskItem
