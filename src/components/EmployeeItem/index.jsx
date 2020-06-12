import React from "react";
const EmployeeItem = props=>{
    const{name}=props
    const getInitials=()=>{
        return  name[0].toUpperCase() + name[name.indexOf(' ')+1].toUpperCase()

    }
    return <div className="d-flex flex-row align-items-center">
        <div className="rounded-circle mr-1 text-danger float-left bg-warning "
             style={{ width: '30px', height: '30px',
                 display: 'flex',
                 justifyContent: 'center',
                 alignItems: 'center'
             }}>
            <span className="text-white" >{getInitials()}</span>
        </div>
        <div className="ml-1">{name}</div>
    </div>
}

export default EmployeeItem
