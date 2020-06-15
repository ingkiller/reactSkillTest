import React,{memo} from "react";
import styled from "styled-components";
const libg = "#EEE";
const liHoberColor = "#FFF";
const liHoberBg = "#857c81";
const selectedBgColor = "#0072ff3d";
const borderSelected="#0000ff"

const LiStatusItem = styled.li`
       display:flex;
       justify-content: space-between!important;
       cursor: pointer;
       position: relative;
       left: 0;
       background-color:${props => props.selected?selectedBgColor:libg}!important;
       margin: .1em;
       padding: .1em .3em;
       align-items: center;
       border: ${props => props.selected?'solid 1px '+borderSelected:'none'};
        &:hover {
            color: ${liHoberColor}!important;
            background-color:${liHoberBg}!important;
        }
     `;
const ItemColor=styled.div`
   display:flex;
   flex-direction: row!important;
   div{
    width:10px ;
    background-color:${props=>props.color};
    margin-right:.5rem;
   }
   `;

const StatusItem=({status,color,count,selected,onSelect})=>{

    const _onSelect=event=>{
        event.preventDefault()
        onSelect(status)
    }

    const render=()=>{
        if(color !== undefined){
           return(<LiStatusItem selected={selected} onClick={_onSelect}>
                   <ItemColor color={color}>
                       <div><span></span></div>
                       <span>{status}</span>
                   </ItemColor>
               <span>{count}</span>
           </LiStatusItem>)
        }
        return(<LiStatusItem selected={selected} onClick={_onSelect}>
                <span>{status}</span>
                <span>{count}</span>
        </LiStatusItem>)
    }
    return( render())
}
export default memo(StatusItem)
