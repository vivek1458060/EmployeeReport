let fs = require('fs');
const path = require('path');
const employeeDataFilePath = path.join(__dirname, 'employees-data.json');

let fetchEmployees = () => {
    try {
        var employeeString = fs.readFileSync(employeeDataFilePath);
        return employees = JSON.parse(employeeString);
    } catch (e) {
        return [];
    }
}

var saveEmployees = (employees) => {
    fs.writeFileSync(employeeDataFilePath, JSON.stringify(employees));
}

var addEmployee = (employee) => {
    var employees = fetchEmployees();

    var duplicateEmployees = employees.filter(({ empId }) => empId === employee.empId);

    if (duplicateEmployees.length === 0) {
        employees.push(employee);
        saveEmployees(employees);
        return employee;
    }
};

let editEmployee = (empId, updates) => {
    let employees = fetchEmployees();
    let updatedEmployee;
    employees = employees.map((employee) => {
        if (employee.empId === empId) {
            updatedEmployee = {
                ...employee,
                ...updates
            }
            return updatedEmployee;
        }
        return employee;
    })
    saveEmployees(employees);
    return updatedEmployee;
}

let getAll = () => {
    return fetchEmployees();
}

module.exports = { getAll, addEmployee, editEmployee }