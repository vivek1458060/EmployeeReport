import axios from 'axios';
import { history } from '../routers/AppRouter';

export const addEmployee = (employee) => ({
    type: 'ADD_EMPLOYEE',
    employee
})

export const startAddEmployee = (employeeData = {}) => {
    return (dispatch, getState) => {
        axios.post('/employees/add', {
            employee: employeeData
        }).then((response) => {
            dispatch(addEmployee(response.data.employee));
            history.push('/employeeList');
        }).catch((e) => {
            if(e.response.status === 400) {
                alert('Employee with this Id already exist!')
            }
            console.log(e)
        });
    }
}

export const editEmployee = (empId, updates) => ({
    type: 'EDIT_EMPLOYEE',
    empId,
    updates
});

export const startEditEmployee = (empId, updates) => {
    return (dispatch, getState) => {
        axios.post('/employees/edit', {
            empId, 
            updates
        }).then((response) => {
            dispatch(editEmployee(empId, response.data.employee));
        }).catch((e) => {
            if(e.response.status === 404) {
                alert('Employee with this Id not found!');
            }
            console.log(e)
        });
    }
}

export const setEmployees = (employees) => ({
    type: 'SET_EMPLOYEES',
    employees
})

export const startSetEmployees = () => {
    return (dispatch, getState) => {
        return axios.get('/employees/list').then((response) => {
            dispatch(setEmployees(response.data.employees));
        }).catch((e) => console.log(e));
    }
}

// [{
//     empId: 1437414,
//     empName: 'Vivek kumar',
//     empType: 'toDecide',
//     status: 'Active',
//     country: 'India',
//     email: 'vivek@gmail.com',
//     location: 'Hyderabad',
//     mobile: 7992356845,
//     deliveryManager: 2357333,
//     projectName: 'GBM',
//     projectRole: 'Team member',
//     tcsDesignation: 'C2',
//     billRate: 10,
//     tcsCost: 4,
//     accountJoiningDate: 1540331824,
//     billingStartDate: 1540331824,
//     laptopId: 'a2356'
// }, {
//     empId: 1437415,
//     empName: 'Akash kumar',
//     empType: 'toDecide',
//     status: 'Inactive',
//     country: 'India',
//     location: 'Hyderabad',
//     email: 'sukanshu@gmail.com',
//     mobile: 8012365478,
//     deliveryManager: 1437586,
//     projectName: 'ORI',
//     projectRole: 'Team member',
//     tcsDesignation: 'C3A',
//     billRate: 9,
//     tcsCost: 3,
//     accountJoiningDate: 1540331824,
//     billingStartDate: 1540331824,
//     laptopId: null
// }]