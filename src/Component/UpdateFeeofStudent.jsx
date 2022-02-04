import React, { Component } from 'react';
import database from './Firebase';
class UpdateFeeofStudent extends Component {
    constructor(props) {
        super(props);
        this.state={
            studentid:"",
            sdata:[],
            depositedDate:"",
            month:"",
            monthlyfeestatus:[],
        }
    }
    
    searchStudentHandler=(event)=>{
        if(event.target.name==="studentid")
        {
            this.setState({studentid:event.target.value});
        }
    }
    searchSubmitHandler=(event)=>{
        database.ref("Students").child(this.state.studentid).on("value", snapshot=>{
            let list=[]
            snapshot.forEach(snap=>{
             list.push(snap.val())   
            })
            console.log(list)
            this.setState({sdata:list})
        });
        database.ref("Students").child(this.state.studentid).child("MonthlyFeeStatus").on("value", snapshot=>{
            let list=[];
            snapshot.forEach(snap=>{
                list.push(snap.val())
            })
            this.setState({monthlyfeestatus:list})

        })
    }
    inputupdatedData=(event)=>
    {
        console.log(event.target.value)
        if(event.target.name==="depositedDate")
        {
            this.setState({depositedDate:event.target.value})
        }
        else if(event.target.name==="month"){
            this.setState({month:event.target.value})
        }
    }
    updatedDataHandler=(event)=>
    {
        console.log(this.state.depositedDate+" "+this.state.month)
        database.ref("Students").child(this.state.studentid).child("MonthlyFeeStatus").push().set({
            depositedDate:this.state.depositedDate,
            monthName:this.state.month
        }).then(msg=>{
            alert("Update data successfully.");
        });
        
    }
    render() { 
        console.log(this.state.monthlyfeestatus);
        var finddata;
        
        this.state.sdata.length===0?
        
            finddata=""
        :
        
            finddata=<div className='container '>
                <div class="table-responsive">
                    <table class="table align-middle">
                        <thead>
                            <tr>
                            <th width="170">Student Id</th>
                            <th width="170">Full Name</th>
                            <th width="170">Father Name</th>
                            <th width="170">Mother Name</th>
                            <th width="170">Mobile Number</th>
                            <th width="170">Class</th>
                            </tr>
                            
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.sdata[14]}</td>
                                <td>{this.state.sdata[7]+" "+this.state.sdata[9]}</td>
                                <td>{this.state.sdata[6]}</td>
                                <td>{this.state.sdata[13]}</td>
                                <td>{this.state.sdata[10]}</td>
                                <td>{this.state.sdata[2]}</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
                <div class="table-responsive">
                    <table class="table align-middle">
                        <thead>
                            <tr>
                            <th width="300">Deposited Date</th>
                            <th width="300">Fee Month Name</th>
                            </tr>
                            
                        </thead>
                        <tbody>
                            {this.state.monthlyfeestatus.map(mdata=>{
                                return (
                                    <tr>
                                        <td>{mdata.depositedDate}</td>
                                        <td>{mdata.monthName}</td>
                                    
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <input type="date" name="depositedDate" onChange={this.inputupdatedData}/>
                    </div>
                    <div className='col-md-6'> 
                        <select name="month" onChange={this.inputupdatedData}>
                            <option>Select Month</option>
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>November</option>
                            <option>December</option>
                        </select>
                    </div>
                </div>
                <div className='row'>
                    <button className='bg bg-info' type='submit' onClick={this.updatedDataHandler}>Update</button>
                </div>
            </div>
        
        return ( <>
           
            <div className='container my-7 text text-center'>
                <h1 className='bg bg-info text-light'>Update Fee of Student</h1>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-8'>
                        <input type="search" name="studentid" placeholder="Search..." value={this.state.studentid} onChange={this.searchStudentHandler}/>
                        <button type="submit"><i class="fa fa-search"  onClick={this.searchSubmitHandler}></i></button>
                    </div>
                    <div className='col-md-2'></div>
                </div>
                {finddata}
            </div>
            
        </> );
    }
}
 
export default UpdateFeeofStudent;