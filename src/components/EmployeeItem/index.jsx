import React,{memo} from "react";
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Avatar from "react-avatar";
const Container = styled.div`
    display:flex!important;
    flex-direction:row!important;
    align-items:center;
    justify-content:left;
`

const TextSpan = styled.span`
    margin-left: .5rem !important;
`

const EmployeeItem = memo(({name})=>{
    return <Container>
            <Avatar name={name} size={40} round />
            <TextSpan>{name}</TextSpan>
    </Container>
})
EmployeeItem.prototype={
    name:PropTypes.string.isRequired
}
export default EmployeeItem
