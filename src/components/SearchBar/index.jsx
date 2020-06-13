import React,{memo} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar=memo(({search,onChange})=>{
    return <form className="form-inline">
            <input onChange={ onChange} value={search}  type="text" className="form-control w-75" placeholder="Search"/>
            <span style={{position: 'relative',margin: 'auto -30px'}}><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></span>
    </form>
})

export default SearchBar
