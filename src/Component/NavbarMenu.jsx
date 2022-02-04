import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
class NavbarMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { collapse: false,
          isWideEnough: false, }
    }
    render() { 
        return ( 
          <>
            <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container">
                        <i class="fa fa-graduation-cap"></i>
                        <div className='collapse navbar-collapse' id='navbarToggeler1'>
                            <ul className='navbar-nav ml-auto'>
                            <li className='nav-item bg bg-color-primary'>
                                <Link className='nav-link' to={"/"}>Home</Link>
                            </li>  
                            <li className='nav-item'>
                                <Link className='nav-link' to={"/addnewstudent"}>Add New Student</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to={"/viewallstudent"}>View All Student</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to={"/updatefeeofstudent"}>Update Fee of Student</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to={"/viewfeestatus"}>View Fee Status</Link>
                            </li>
                            </ul>
                        </div>
                    </div>
                </nav>
          </>
        
        );
    }
}
 
export default NavbarMenu;