import React from "react";
import styled from "styled-components";
const Container = styled.div`
    width: 25px;
     height: 25px;
     display: flex;
     justify-content: center;
     align-items: flex-end;
     float:right!important
     `;
const RoleItem=({role,count,selected,onSelect})=>{

    const _onSelect=event=>{
        event.preventDefault()
        onSelect(role)
    }
    return <li className={(selected?"selected":"")}>
        <a  href="/" onClick={_onSelect}>
            <span>{role}</span>
            <Container>
                <span>{count}</span>
            </Container>
        </a>
    </li>
}
export default RoleItem


