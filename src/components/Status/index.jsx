import React, {useEffect, useState, memo, useCallback} from 'react'
import styled from 'styled-components';
import {useDispatch,useSelector,useStore} from "react-redux";
import {getStatus, requestRoles} from "../../reducers/app";
import {StatusItem} from '../index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faSortUp,faSortDown,faEyeSlash,faEye } from '@fortawesome/free-solid-svg-icons'
import {COLOR, STATUS} from "../../communs/variables";
const libg = "#EEE";
const liHoberColor = "#607D8B";
const liHoberBg = "#857c81";
const selectedBgColor = "#CFD8DC";
const selectedColor = "#FFF";
const selectedHoberBg="#BBD8DC"
const aColor="#5c5c5c"
const aSpan="#6c757d"
const h4Color="#6c757d"

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

const Status=memo(({title,onSelectStatus})=>{
    const store = useStore()
    const dispatch = useDispatch()
    const status=useSelector(state=>state.filter.status)
    const [arrStatus,setArrStatus]=useState([])
    const [show,setShow]=useState(true)
    const [statusSelected,setStatusSelected]=useState(status)

    useEffect(()=>{
        setStatusSelected(status)
    },[status])

    useEffect(()=>{
        dispatch(getStatus())
        setArrStatus(store.getState().app.status)
    },[])

    const _onSelectStatus= useCallback((statusName)=>{
        onSelectStatus(statusName)
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
                        arrStatus.map((item,key)=>(<StatusItem
                            key={key}
                            {...item}
                            selected={statusSelected.indexOf(item.status) !== -1}
                            onSelect={_onSelectStatus}
                        />))
                    }
                </Container>
            </Box>
        </>
    )
})

export default Status
