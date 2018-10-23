import React from 'react';
import { connect } from 'react-redux';
import { Radio, Modal } from 'antd';
import ReactTable from "react-table";

import EmployeeForm from './EmployeeForm';
import { startEditEmployee } from '../actions/employees';

export class DashboardPage extends React.Component {
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
                        filterable: true,
                    },
                    {
                        Header: "Emp Type",
                        accessor: "empType"
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
                        )
                    },
                    {
                        Header: "Country",
                        accessor: "country"
                    }, {
                        Header: "Location",
                        accessor: "location"
                    }, {
                        Header: "Mobile",
                        accessor: "mobile"
                    }, {
                        Header: "Email Id",
                        accessor: "email"
                    }, {
                        Header: "Delivery Manager",
                        accessor: "deliveryManager"
                    }, {
                        Header: "Project Name",
                        accessor: "projectName"
                    }, {
                        Header: "Project Role",
                        accessor: "projectRole"
                    }, {
                        Header: "Tcs Designation",
                        accessor: "tcsDesignation"
                    }, {
                        Header: "Sr/Jr",
                        accessor: "tcsDesignation",
                        Cell: row => (
                            row.value ? row.value === 'C2' ? 'Jr' : 'Sr' : ''
                        )
                    }, {
                        Header: "Bill Rate",
                        accessor: "billRate"
                    }, {
                        Header: "Tcs Cost",
                        accessor: "tcsCost"
                    }, {
                        Header: "Account Joining Date",
                        accessor: "accountJoiningDate"
                    }, {
                        Header: "Billing Start Date",
                        accessor: "billingStartDate"
                    }, {
                        Header: "Margin",
                        Cell: (row) => <span>{row.original.billRate - row.original.tcsCost}</span>
                    }, {
                        Header: "Laptop Id",
                        accessor: "laptopId"
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);