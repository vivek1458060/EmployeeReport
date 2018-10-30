import React from 'react';
import { connect } from 'react-redux';
import { Radio, Modal } from 'antd';
import ReactTable from "react-table";
import moment from 'moment';
import _ from 'lodash';

import EmployeeForm from './EmployeeForm';
import { startEditEmployee } from '../actions/employees';

export class EmployeeListPage extends React.Component {
    state = {
        employees: this.props.employees,
        employeeInEditMode: null,
        modalVisible: false
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ employees: nextProps.employees })
    }
    filterCaseInsensitive = (filter, row) => {
        const id = filter.pivotId || filter.id;
        if (!isNaN(row[id])) {
            return row[id] !== undefined ? String(row[id]).startsWith(filter.value) : true
        }
        return row[id] !== undefined ? String(row[id].toLowerCase()).includes(filter.value.toLowerCase()) : true
    }
    onEmployeeUpdateSubmit = (employee) => {
        this.props.startEditEmployee(this.state.employeeInEditMode.empId, employee);
        this.setState({ modalVisible: false })
    }
    handleEmployeeSelect = (row) => {
        this.setState({ employeeInEditMode: row, modalVisible: true })
    }
    setModalVisible(modalVisible) {
        this.setState({ modalVisible });
    }
    render() {
        return (
            <div> 
                <ReactTable
                    data={this.state.employees}
                    columns={[{
                        Cell: row => (
                            <input 
                                type="radio" 
                                name="selectEmployee" 
                                style={{marginLeft: '3px'}}
                                onChange={() => this.handleEmployeeSelect(row.original)}
                            />
                        ),
                        maxWidth: 30
                    }, {
                        Header: "Emp Id",
                        accessor: "empId",
                        filterable: true
                    },
                    {
                        Header: "Emp Name",
                        accessor: "empName",
                        Cell: row => _.capitalize(row.value),
                        filterable: true
                    },
                    {
                        Header: "Emp Type",
                        accessor: "empType",
                        filterable: true
                    },
                    {
                        Header: "Status",
                        accessor: "status",
                        Cell: row => (
                            <span>
                                <span style={{
                                    color: row.value === 'Active' ? '#57d500' : '#ff2e00',
                                    transition: 'all .3s ease'
                                }}>
                                    &#x25cf;
                              </span> {
                                    row.value
                                }
                            </span>
                        ),
                        filterable: true
                    },
                    {
                        Header: "Country",
                        accessor: "country",
                        filterable: true
                    }, {
                        Header: "Location",
                        accessor: "location",
                        filterable: true
                    }, {
                        Header: "Mobile",
                        accessor: "mobile",
                        filterable: true
                    }, {
                        Header: "Email Id",
                        accessor: "email",
                        filterable: true
                    }, {
                        Header: "Delivery Manager",
                        accessor: "deliveryManager",
                        filterable: true
                    }, {
                        Header: "Project Name",
                        accessor: "projectName",
                        filterable: true
                    }, {
                        Header: "Project Role",
                        accessor: "projectRole",
                        filterable: true
                    }, {
                        Header: "Tcs Designation",
                        accessor: "tcsDesignation",
                        filterable: true
                    }, {
                        Header: "Sr/Jr",
                        accessor: "tcsDesignation",
                        Cell: row => (
                            row.value ? row.value === 'C2' ? 'Jr' : 'Sr' : ''
                        ),
                        filterable: true
                    }, {
                        Header: "Laptop Id",
                        accessor: "laptopId",
                        filterable: true
                    }, {
                        Header: "Account Joining Date",
                        accessor: "accountJoiningDate",
                        Cell: row => moment(row.value).format('L'),
                        filterable: true
                    }, {
                        Header: "Billing Start Date",
                        accessor: "billingStartDate",
                        Cell: row => moment(row.value).format('L'),
                        filterable: true
                    }, {
                        Header: "Bill Rate($/hr)",
                        accessor: "billRate",
                        Cell: row => `$${row.value}`,
                        filterable: true
                    }, {
                        Header: "Tcs Cost",
                        accessor: "tcsCost",
                        Cell: row => `₹${row.value}`,
                        filterable: true
                    },{
                        Header: "Margin(%)",
                        accessor: 'margin',
                        filterable: true
                    }]}
                    defaultSorted={[
                        {
                            id: "createdAt",
                            desc: true
                        }
                    ]}
                    defaultFilterMethod={this.filterCaseInsensitive}
                    defaultPageSize={7}
                    pageSizeOptions={[5, 10, 15]}
                    className="-striped -highlight"
                />
                <Modal
                    title="Editing Employee"
                    style={{ top: 20 }}
                    destroyOnClose={true}
                    maskClosable={false}
                    visible={this.state.modalVisible}
                    onCancel={() => this.setModalVisible(false)}
                    width={620}
                    footer={null}
                >
                    <EmployeeForm 
                        onSubmit={this.onEmployeeUpdateSubmit}
                        {...this.state.employeeInEditMode}
                    />
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    employees: state.employees
})

const mapDispatchToProps = (dispatch) => ({
    startEditEmployee: (empId, employee) => dispatch(startEditEmployee(empId, employee))
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeListPage);