import React, {useEffect, useState, memo, useMemo, useCallback} from 'react'
import styled from 'styled-components';
import {useDispatch,useSelector} from "react-redux";
import {requestRoles} from "../../reducers/app";
import {RoleItem} from '../index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faSortUp,faSortDown,faEyeSlash,faEye } from '@fortawesome/free-solid-svg-icons'
const _width=98
const Container = styled.ul`
   padding-inline-start: 0;
`;
const BoxHeader=styled.div`
   width: ${_width}%;
    display: flex!important;
    flex-direction:row!important;
    justify-content: space-between!important;
`;
const Box=styled.div`
    display:${props=>props.show?'block':'none'} 
`;

const Roles=memo(({title,onselectRole})=>{
    const roles=useSelector(state=>state.filter.roles)

    const [show,setShow]=useState(true)
    const [arrRoles,setArrRoles]=useState([])
    const [rolesSelected,setRolesSelected]=useState(roles)

    const dispatch = useDispatch()

   useEffect(()=>{
      dispatch(requestRoles()).then(result=>{
          setArrRoles(result.payload)
      })
   },[])

    useEffect(()=>{
        setRolesSelected(roles)
    },[roles])

    const _onSelectRole= useCallback((roleName)=>{
        onselectRole(roleName)
    },[])
    return(<>
            <BoxHeader>
                <h4>{title}</h4>
                <span type="button" onClick={()=>setShow(!show)}>
                <FontAwesomeIcon icon={show?faEyeSlash:faEye} />{' '}
                    <FontAwesomeIcon icon={show? faSortUp:faSortDown} />
            </span>
            </BoxHeader>
            <Box show={show}>
                    <Container>
                        {
                            arrRoles.map((item,key)=>(<RoleItem
                                key={key}
                                {...item}
                                selected={rolesSelected.indexOf(item.role) === -1?false:true}
                                onSelect={_onSelectRole}
                            />))
                        }
                    </Container>
            </Box>
        </>
    )
})
export default Roles
