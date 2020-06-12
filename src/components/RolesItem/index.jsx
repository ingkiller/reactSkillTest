import React from "react";

const RoleItem=({role,count,selected,onSelect})=>{

    const _onSelect=event=>{
        event.preventDefault()
        onSelect(role)
    }
    return <li className={"nav-item "+(selected?"selected":"")}>
        <a className={"nav-link " } href="/"
           onClick={_onSelect}
        >
            <span className="font-weight-bold">{role}</span>
            <div className="rounded-circle mr-1 text-danger float-right bg-warning "
                 style={{width: '25px', height: '25px',
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'flex-end'
                 }}>
                <span className="text-white" >{count}</span>
            </div>
        </a>
    </li>
}
export default RoleItem


