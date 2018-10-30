let fs = require('fs');
const path = require('path');
const _ = require('lodash');
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

const calculateMargin = (empType, country, billRate, tcsCost) => {
    let dailyWorkingHours = 8;
    if(country === 'India') {
        dailyWorkingHours = 8.75;
    }
    const monthyCostToClient = billRate*dailyWorkingHours*21*72.625;
    const monthlyCostToTcs = empType === 'PA' ? tcsCost*21 : tcsCost;
    console.log(monthyCostToClient, monthlyCostToTcs)
    return _.round(((monthyCostToClient - monthlyCostToTcs)/monthyCostToClient)*100, 3);
}

var addEmployee = (employee) => {
    var employees = fetchEmployees();

    var duplicateEmployees = employees.filter(({ empId }) => empId === employee.empId);

    if (duplicateEmployees.length === 0) {
        const { empType, country, billRate, tcsCost } = employee;
        employee.margin = calculateMargin(empType, country, billRate, tcsCost)
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
            if(employee.empType !== updates.empType || employee.country !== updates.country || employee.tcsCost !== updates.tcsCost || employee.billRate !== updates.billRate) {
                updates.margin = calculateMargin(updates.empType, updates.country, updates.billRate, updates.tcsCost);
            }
            
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