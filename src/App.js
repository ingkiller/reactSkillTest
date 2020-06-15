import React, {memo} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import {LeftSide,RightSide} from './containers'

function App() {

  return (
    <div className="container-fluid">
        <div className="row justify-content-center"> <h1>React test</h1></div>
        <div className="row">
            <div className="col-sm-12 col-md-3">
                <LeftSide/>
            </div>
            <div className="col-sm-12 col-md-9  bg-light">
                <RightSide/>
            </div>
        </div>
    </div>
  );
}
export default memo(App);
