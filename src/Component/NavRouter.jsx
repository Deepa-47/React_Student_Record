import React, { Component } from 'react';
import NavbarMenu from './NavbarMenu';
import { Route, Routes} from 'react-router-dom';
import Home from './Home';
import AddNewStudent from './AddNewStudent';
import ViewAllStudent from './ViewAllStudent';
import UpdateFeeofStudent from './UpdateFeeofStudent';
import ViewFeeStatus from './ViewFeeStatus';

class NavRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <NavbarMenu/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/addnewStudent" element={<AddNewStudent/>}/>
                    <Route path="/viewallstudent" element={<ViewAllStudent/>}/>
                    <Route path="/updatefeeofstudent" element={<UpdateFeeofStudent/>}/>
                    <Route path="/viewfeestatus" element={<ViewFeeStatus/>}/>
                </Routes>
               
            </div>
        )
    }
}
export default NavRouter;