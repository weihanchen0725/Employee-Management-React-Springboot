import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props){
        super(props)
        
        this.state={
            id: this.props.match.params.id,
            firstName:'',
            lastName:'',
            emailid:''
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeByID(this.state.id).then((res) =>{
           let employee = res.data;
           this.setState({firstName: employee.firstName,
                lastName: employee.lastName,
                emailid : employee.emailid}); 
        });
    }

    updateEmployee = (e) =>{
        e.preventDefault();
        let employee = {firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        emailid: this.state.emailid};
        console.log("Employee => " + JSON.stringify(employee));

        EmployeeService.updateEmployee(employee, this.state.id).then(res =>{
            this.props.history.push('/employees');
        });
    }

    changeFirstNameHandler = (event) =>{
        this.setState({firstName: event.target.value});
    }
    changeLastNameHandler = (event) =>{
        this.setState({lastName: event.target.value});
    }
    changeEmailHandler = (event) =>{
        this.setState({emailid: event.target.value});
    }

    cancel() {
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name:</label>
                                        <input placeholder="First Name" name="firstname" className="form-control"
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name:</label>
                                        <input placeholder="Last Name" name="lastname" className="form-control"
                                            value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Email Adress:</label>
                                        <input placeholder="Email Adress" name="emailid" className="form-control"
                                            value={this.state.emailid} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateEmployee}>Update</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateEmployeeComponent;