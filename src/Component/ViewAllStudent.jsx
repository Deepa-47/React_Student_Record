import React, { Component } from 'react';
import database from './Firebase';
class ViewAllStudent extends Component {
    constructor(props) {
        super(props);
        this.state ={
            data:[],
        }
    }

    componentDidMount=(event)=>{
        database.ref("Students").on("value", snapshot=>{
            var list=[];
            snapshot.forEach(snap=>{
                list.push(snap.val());
            })
            console.log(list)
            this.setState({
                data:list
            });
        })

    }
    render() { 
        return ( <>
            
            <div className='container text-center'>
               <h1 className='bg-info text-light '>View All Student</h1>
               <div class="table-responsive">
                    <table >
                        <thead className='table-light'>
                        <tr>
                            <th width="100">ID</th>
                            <th width="200">Name</th>
                            <th width="170">Father's Name</th>
                            <th width="200">Mother's Name</th>
                            <th width="170">Mobile Number</th>
                            <th width="100">Class</th>
                            <th width="100">Address</th>
                            <th width="100">Action</th>
                            <th width="100"></th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.data.map(data=>{
                        return(
                            <tr>
                                <td>{data.studentid}</td>
                                <td>{data.FirstName+" "+data.LastName}</td>
                                <td>{data.FatherName}</td>
                                <td>{data.MotherName}</td>
                                <td>{data.MobileNumber}</td>
                                <td>{data.Class}</td>
                                <td>{data.Address}</td>
                            </tr>
                            
                        )
                        })}
                        </tbody>
                    </table>
                </div>
               
            </div>
        </> );
    }
}
 
export default ViewAllStudent;