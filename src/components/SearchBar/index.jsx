import React, {memo, useCallback, useEffect, useState} from "react";
import styled from "styled-components";
import {useSelector,useDispatch,useStore} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {debounce} from "lodash";
import {addSearch} from "../../reducers/filter";
import {onFilter} from "../../reducers/app";

const Container = styled.span`
    position: relative;
    margin: auto -30px;
`

const SearchBar=()=>{

    const dispatch=useDispatch()
    const store=useStore()
    const search=useSelector(state=>state.filter.search)
    const [_search,setSearch]=useState("")

    useEffect(()=>{
        if(search === ''){
            setSearch(search)
        }
    },[search])


    const delay = useCallback(debounce((value)=>{
        dispatch(addSearch(value))
        const {filter}=store.getState()
        dispatch(onFilter(filter))

    },500),[])

    const _onChange=event=>{
        delay(event.target.value)
        setSearch(event.target.value)
    }

    return <form className="form-inline">
        <input onChange={ _onChange} value={_search}  type="text" className="form-control w-75" placeholder="Search"/>
        <Container>
            <FontAwesomeIcon icon={faSearch}/>
        </Container>
    </form>
}

export default memo(SearchBar)
