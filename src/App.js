import React, {useEffect, useMemo,memo} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './assets/css/styles.css'
import {useDispatch,useStore,useSelector} from "react-redux";
import {getTasks,getRoles} from "./reducers/app";
import {LeftSide,RightSide} from './containers'

function App() {

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getTasks())
    },[])

  return (
    <div className="container-fluid">
        {
            console.log('app:')
        }
        <div className="row justify-content-center"> <h1>React test</h1></div>
        <div className="row">
            <div className="col-3">
                <LeftSide/>
            </div>
            <div className="col-8  bg-light">
                <RightSide/>
            </div>
        </div>
    </div>
  );
}


export default App;
