import axios from 'axios';

const EMLPOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService{
    
    getEmployees(){
        return axios.get(EMLPOYEE_API_BASE_URL);
    }
    createEmployee(employee){
        return axios.post(EMLPOYEE_API_BASE_URL, employee);
    }
    getEmployeeByID(employeeid){
        return axios.get(EMLPOYEE_API_BASE_URL + '/' + employeeid);
    }
    updateEmployee(employee, employeeid){
        return axios.put(EMLPOYEE_API_BASE_URL + '/' + employeeid, employee);
    }
    deleteEmployee(employeeid){
        return axios.delete(EMLPOYEE_API_BASE_URL + '/' + employeeid);
    }
}

export default new EmployeeService()