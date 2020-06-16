import React,{memo} from "react";
import styled from "styled-components";

const libg = "#EEE";
const liHoberColor = "#FFF";
const liHoberBg = "#857c81";
const selectedBgColor = "#0072ff3d";
const borderSelected="#0000ff"

const LiRoleItem = styled.li`
       display:flex;
       justify-content: space-between!important;
       cursor: pointer;
       position: relative;
       background-color:${props => props.selected?selectedBgColor:libg}!important;
       margin: .1em;
       padding: .1em .3em;
       align-items: center;
       border: ${props => props.selected?'solid 1px '+borderSelected:'solid 1px transparent'};
        &:hover {
            color: ${liHoberColor}!important;
            background-color:${liHoberBg}!important;
        }
     `;
const RoleItem=({role,count,selected,onSelect})=>{

    const _onSelect=event=>{
        event.preventDefault()
        onSelect(role)
    }
    return <LiRoleItem selected={selected} onClick={_onSelect}>
        <span>{role}</span>
        <span>{count}</span>
    </LiRoleItem>
}
export default memo(RoleItem)
