import React from 'react';
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';
import { startAddEmployee } from '../actions/employees';

export class AddEmployeePage extends React.Component {
    onSubmit = (employee) => {
        this.props.startAddEmployee(employee);
        this.props.history.push('/dashboard');
    }
    render() {
        return (
            <EmployeeForm
                onSubmit={this.onSubmit}
            />
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddEmployee: (employee) => dispatch(startAddEmployee(employee))
});

export default connect(undefined, mapDispatchToProps)(AddEmployeePage);