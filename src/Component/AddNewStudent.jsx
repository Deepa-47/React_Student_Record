import React, { Component } from 'react';
import database from './Firebase';
class AddNewStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname:"",
            lastname:"",
            fathername:"",
            mothername:"",
            gender:"",
            address:"",
            dob:"",
            mobileno:"",
            email:"",
            clas:"",
            addmissionfee:"",
            monthlyfee:"",
            dateofaddmission:"",
        }
    }

    inputHandler=(event)=>{
        let inputFieldName=event.target.name;
        let inputFieldValue=event.target.value;
        inputFieldName==="firstname" ? this.setState({firstname:inputFieldValue}):
        inputFieldName==="lastname" ? this.setState({lastname:inputFieldValue}):
        inputFieldName==="fathername" ? this.setState({fathername:inputFieldValue}):
        inputFieldName==="mothername" ? this.setState({mothername:inputFieldValue}):
        inputFieldName==="gender" ? this.setState({gender:inputFieldValue}):
        inputFieldName==="address" ? this.setState({address:inputFieldValue}):
        inputFieldName==="dob" ? this.setState({dob:inputFieldValue}):
        inputFieldName==="mobileno" ? this.setState({mobileno:inputFieldValue}):
        inputFieldName==="email" ? this.setState({email:inputFieldValue}):
        inputFieldName==="clas" ? this.setState({clas:inputFieldValue}):
        inputFieldName==="addmissionfee" ? this.setState({addmissionfee:inputFieldValue}):
        inputFieldName==="dateofaddmission" ? this.setState({dateofaddmission:inputFieldValue}):
        inputFieldName==="monthlyfee" ? this.setState({monthlyfee:inputFieldValue}):
        alert("Invalid data");
    }
    submitHandler=(event)=>{
        event.preventDefault();
        var counter=0;
        database.ref("StudentId").on("value", snapshot=>{
            counter=snapshot.val().sid;
            console.log(snapshot.val().sid)
          
        })
        counter++;
        database.ref("StudentId").set({
            sid:counter
        }).then(msg=>{
            database.ref("Students").child(counter).set({
            FirstName:this.state.firstname,
            LastName:this.state.lastname,
            FatherName:this.state.fathername,
            MotherName:this.state.mothername,
            Gender:this.state.gender,
            Address:this.state.address,
            DateOfBirth:this.state.dob,
            MobileNumber:this.state.mobileno,
            Email:this.state.email,
            Class:this.state.clas,
            AddmissionFee:this.state.addmissionfee,
            DateofAddmission:this.state.dateofaddmission,
            MonthlyFee:this.state.monthlyfee,
            studentid:counter
        })
        .then(msg=>{
            alert("Data Stored")
            this.setState({firstname:"",lastname:"",fathername:"",mothername:"",gender:"",address:"",dob:"",mobileno:"",email:"",clas:"",addmissionfee:"",dateofaddmission:"",monthlyfee:""})
        });
       })
        //  console.log(this.state.firstname+", "+this.state.lastname+", "+this.state.fathername+", "+this.state.mothername+", "+this.state.gender+", "+this.state.address+", "+this.state.mobileno+", "+this.state.monthlyfee+", "+this.state.dateofaddmission); 
    }
    render() { 
        return ( <>
            <div className='container my-7'>
                <div className='row'><p className='alert alert-success text-center'>New Student Registration</p></div>
                <form onSubmit={this.submitHandler}>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label>First Name</label> 
                                <input type="text" name="firstname" onChange={this.inputHandler} value={this.state.firstname} class="form-control my-1"/>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label>Last Name</label> 
                                <input type="text" name="lastname" onChange={this.inputHandler} value={this.state.lastname} class="form-control my-1"/>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label>Father's Name</label> 
                                <input type="text" name="fathername" onChange={this.inputHandler} value={this.state.fathername} class="form-control my-1"/>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label>Mother's Name</label> 
                                <input type="text" name="mothername" onChange={this.inputHandler} value={this.state.mothername} class="form-control my-1"/>
                            </div>
                        </div>
                    </div>
                    <div className='row my-1'>
                        <div className='col-md-2'>
                            <label>Gender</label>
                        </div>
                        <div className='col-md-2'>
                            <input className="form-check-input" type="radio" name="gender" onChange={this.inputHandler} value="Male"/>
                            <label>Male</label>
                        </div>
                        <div className='col-md-2'>
                            <input className="form-check-input" type="radio" name="gender" onChange={this.inputHandler} value="Female"/>
                            <label>Female</label>
                        </div>
                        <div className='col-md-2'>
                            <input className="form-check-input" type="radio" name="gender" onChange={this.inputHandler} value="Others" />
                            <label>Others</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='form-group'>
                                <label>Address</label> 
                                <input type="text" name="address" onChange={this.inputHandler} value={this.state.address} className="form-control my-1"/>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='form-group'>
                                <label>Date of Birth</label> 
                                <input type="date" name="dob" onChange={this.inputHandler} value={this.state.dob} className="form-control my-1"/>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='form-group'>
                                <label>Mobile Number</label> 
                                <input type="number" name="mobileno" onChange={this.inputHandler} value={this.state.mobileno} className="form-control my-1"/>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='form-group'>
                                <label>Email</label> 
                                <input type="email" name="email" onChange={this.inputHandler} value={this.state.email} className="form-control my-1"/>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label>Class</label> 
                                <input type="text" name="clas" onChange={this.inputHandler} value={this.state.clas} className="form-control my-1"/>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label>Addmission Fee</label> 
                                <input type="text" name="addmissionfee" onChange={this.inputHandler} value={this.state.addmissionfee} className="form-control my-1"/>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label>Date of Addmission</label> 
                                <input type="date" name="dateofaddmission" onChange={this.inputHandler} value={this.state.dateofaddmission} className="form-control my-1"/>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label>Monthly Fee</label> 
                                <input type="text" name="monthlyfee" onChange={this.inputHandler} value={this.state.monthlyfee} className="form-control my-1"/>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <input type="submit" value="Submit" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        </> );
    }
}
 
export default AddNewStudent;