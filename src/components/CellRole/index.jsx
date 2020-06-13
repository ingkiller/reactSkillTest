import React,{memo} from "react";
const CellRole = ({role})=>{
    return <div>{role.toString()}</div>
}
export default memo(CellRole)
