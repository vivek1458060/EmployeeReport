export const addEmployee = (employee) => ({
    type: 'ADD_EMPLOYEE',
    employee
})

export const startAddEmployee = (employeeData = {}) => {
    return (dispatch, getState) => {
        dispatch(addEmployee(employeeData))
    }
}

export const editEmployee = (empId, updates) => ({
    type: 'EDIT_EMPLOYEE',
    empId,
    updates
});

export const startEditEmployee = (empId, updates) => {
    return (dispatch, getState) => {
        dispatch(editEmployee(empId, updates));
    }
}

export const setEmployees = (employees) => ({
    type: 'SET_EMPLOYEES',
    employees
})

export const startSetEmployees = () => {
    return (dispatch, getState) => {
        dispatch(setEmployees([{
            empId: 1437414,
            empName: 'Vivek kumar',
            empType: 'toDecide',
            status: 'Active',
            country: 'India',
            email: 'vivek@gmail.com',
            location: 'Hyderabad',
            mobile: 7992356845,
            deliveryManager: 2357333,
            projectName: 'GBM',
            projectRole: 'Team member',
            tcsDesignation: 'C2',
            billRate: 10,
            tcsCost: 4,
            accountJoiningDate: 1540331824,
            billingStartDate: 1540331824,
            laptopId: 'a2356'
        }, {
            empId: 1437415,
            empName: 'Akash kumar',
            empType: 'toDecide',
            status: 'Inactive',
            country: 'India',
            location: 'Hyderabad',
            email: 'sukanshu@gmail.com',
            mobile: 8012365478,
            deliveryManager: 1437586,
            projectName: 'ORI',
            projectRole: 'Team member',
            tcsDesignation: 'C3A',
            billRate: 9,
            tcsCost: 3,
            accountJoiningDate: 1540331824,
            billingStartDate: 1540331824,
            laptopId: null
        }]));        
    }
}