const employeesReducerDefaultState = [];

export default (state = employeesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EMPLOYEE': 
            return [
                ...state,
                action.employee
            ]
        case 'EDIT_EMPLOYEE':
            return state.map((employee) => {
                if(employee.empId === action.empId) {
                    return {
                        ...employee,
                        ...action.updates
                    }
                } else {
                    return employee
                }
            })
        case 'SET_EMPLOYEES': 
            return action.employees
        default:
            return state;
    }
}

