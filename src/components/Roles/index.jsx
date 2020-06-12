import React from 'react'
import {RoleItem} from '../index'

const Roles=({title,arrRoles,rolesSelected,onselectRole})=>{

    const _onSelectRole=(roleName)=>{
        onselectRole(roleName)
    }

    return <ul className="nav flex-column menu">
                <h4 className="ml-1">{title}</h4>
                {
                    arrRoles.map((item,key)=>(<RoleItem
                        key={key}
                        {...item}
                        selected={rolesSelected.indexOf(item.role) === -1?false:true}
                        onSelect={_onSelectRole}
                    />))

                }
            </ul>


}

export default Roles
