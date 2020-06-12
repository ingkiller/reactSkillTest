import React,{useEffect,useState} from 'react'
import styled from 'styled-components';

import {RoleItem} from '../index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faSortUp,faSortDown,faEyeSlash,faEye } from '@fortawesome/free-solid-svg-icons'
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

const Container = styled.div`
  width: ${_width}%;
 
   ul {
    list-style: none;
    margin-block-start: 0;
    padding-inline-start: 0;
    
    li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: ${libg};
        margin: .1em;
        padding: .3em 0;
        height: 3em;
        border-radius: 4px;
        & :hover {
            color: ${selectedColor};
            background-color:${liHoberBg};
        }
        &.selected {
            background-color: ${selectedBgColor};
            color: ${selectedColor};
        }
        &.selected:hover {
            background-color: ${selectedHoberBg};
            color: ${selectedColor};
        }
        a {
            color: ${aColor};
            display: block;
            padding: .5rem 1rem;
            text-decoration: none;
            background-color: transparent;
             span:{
               color: ${aSpan}!important;
              } 
          }  
         
    }
    h4{
        color: ${h4Color}!important;
        margin-left: 0.5rem!important;
        font-size:larger
    }
  }
`;

const BoxHeader=styled.div`
   width: ${_width}%;
  
    display: flex!important;
    flex-direction:row!important;
    justify-content: space-between!important;
   
`;

const Roles=({title,arrRoles,rolesSelected,onselectRole})=>{
    const [show,setShow]=useState(true)

    useEffect(()=>{
       //call api and save result using setState
    },[])

    const _onSelectRole=(roleName)=>{
        onselectRole(roleName)
    }

    return(<>
            <BoxHeader>
            <h4>{title}</h4>
            <span type="button" onClick={()=>setShow(!show)}>
                <FontAwesomeIcon icon={show?faEyeSlash:faEye} />{' '}
               <FontAwesomeIcon icon={show? faSortUp:faSortDown} />
            </span>
        </BoxHeader>
        <div className={show?"collapse show":"collapse"}>
            <Container>
                <ul>
                    {
                        arrRoles.map((item,key)=>(<RoleItem
                            key={key}
                            {...item}
                            selected={rolesSelected.indexOf(item.role) === -1?false:true}
                            onSelect={_onSelectRole}
                        />))
                    }
                </ul>
            </Container>
        </div>
</>
        )
}


export default Roles
