import React,{memo} from "react";

const CellStatus = ({status})=>{
    return <div>{status.color !== undefined ? status.status:status}</div>
}
export default memo(CellStatus)
