import React, { Component } from 'react';
import database from './Firebase';
class ViewFeeStatus extends Component {
    constructor(props) {
        super(props);
        this.state={
            studentid:"",
            sdata:[],
            viewDepositeStatusData:[],
        }
    }
    
    searchStudentHandler=(event)=>{
        if(event.target.name==="studentid")
        {
            this.setState({studentid:event.target.value});
        }
    }
    searchSubmitHandler=(event)=>{
        database.ref("Students").child(this.state.studentid).on("value",snapshot=>{
            let list=[]
            snapshot.forEach(snap=>{
                list.push(snap.val())
            })
            console.log(list)
            this.setState({sdata:list});
        })
        database.ref("Students").child(this.state.studentid).child("MonthlyFeeStatus").on("value",snapshot=>{
            let list=[]
            snapshot.forEach(snap=>{
                list.push(snap.val())
            })
            console.log(list)
            this.setState({viewDepositeStatusData:list});
        })
    }
    render() { 
        var finddata;
        this.state.sdata.length===0 ?
            finddata=""
            :
            finddata=<div className='container my-7'>
                <div class="table-responsive">
                    <table class="table align-middle">
                    <thead>
                        <tr>
                            <th width="170">Student Name</th>
                            <th width="170">Father's Name</th>
                            <th width="170">Address</th>
                            <th width="250">Deposited Month Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.sdata[7]+" "+this.state.sdata[9]}</td>
                            <td>{this.state.sdata[6]}</td>
                            <td>{this.state.sdata[1]}</td>
                            <td><select>
                            {this.state.viewDepositeStatusData.map(data=>{
                            return(
                                <option>{data.depositedDate}  {data.monthName}</option>
                            )
                            })}
                            </select></td>
        
                        </tr>
                       
                    </tbody>
                </table>
                </div>

            </div>
        return(
           <div className='container my-7 text-center'>
                <h1 className='bg-info text-light' >View Fee Status of Student</h1>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-8'>
                        <input type="search" name="studentid" placeholder='Search...' value={this.state.studentid} onChange={this.searchStudentHandler}/>
                        <button type="submit"><i class="fa fa-search"  onClick={this.searchSubmitHandler}></i></button>
                    </div>
                    <div className='col-md-2'></div>
                </div>
                {finddata}
            </div>
            );
    }
}
 
export default ViewFeeStatus;