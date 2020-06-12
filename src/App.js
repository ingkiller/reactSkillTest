import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import {useDispatch,useStore,useSelector} from "react-redux";
import {getTasks,getRoles} from "./reducers/app";


function App() {

    const dispatch = useDispatch()
    const store = useStore()
    const{app:{tasks}}=useSelector(state=>state)
    useEffect(()=>{
        dispatch(getTasks())
    },[])
  return (
    <div className="container-fluid">
        {
            console.log('store:',store.getState())
        }
      <h1>React test</h1>
    </div>
  );
}

export default App;
