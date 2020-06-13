import React,{memo} from "react";

const CellStatus = ({status})=>{
    return <div>{status.status !== undefined ? status.status:status}</div>
}
export default memo(CellStatus)
