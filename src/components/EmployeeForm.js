import React from 'react';
import moment from 'moment';

import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, DatePicker } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

export class EmployeeForm extends React.Component {
  state = {
    empId: this.props.empId,
    empName: this.props.empName,
    empType: this.props.empType,
    status: this.props.status,
    country: this.props.country,
    location: this.props.location,
    mobile: this.props.mobile,
    email: this.props.email,
    deliveryManager: this.props.deliveryManager,
    projectName: this.props.projectName,
    projectRole: this.props.projectRole,
    tcsDesignation: this.props.tcsDesignation,
    billRate: this.props.billRate,
    tcsCost: this.props.tcsCost,
    accountJoiningDate: this.props.accountJoiningDate,
    billingStartDate: this.props.billingStartDate,
    laptopId: this.props.laptopId,
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, fieldsValue) => {
      if (!err) {
        const employeeData = { 
          ...fieldsValue,
          accountJoiningDate: fieldsValue['accountJoiningDate'].valueOf(),
          billingStartDate: fieldsValue['billingStartDate'].valueOf()
        }
        this.props.onSubmit(employeeData)
      }
    });
  }
  validateNumber = (e, fieldName) => {
    let number = parseInt(e.target.value || 0, 10);
    if (isNaN(number)) {
        number = this.props.form.getFieldValue(fieldName);
    } 
    return number ? number : null;
  }
  validateNumberWidthDecimal = (e, fieldName) => {
    let number = e.target.value;
    if (isNaN(number)) {
        number = this.props.form.getFieldValue(fieldName);
    } 
    return number ? number : null;
  }
  handleValidateStatus = (value) => { 
    const validateStatus = value === 'Active' ? 'success' : 'warning';
    this.setState({ validateStatus })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 7,
        },
      },
    };

    return (
      <Form onSubmit={this.handleSubmit} style={{maxWidth: '750px'}}>
      <FormItem
          {...formItemLayout}
          label="Employee Id"
        >
          {getFieldDecorator('empId', {
            initialValue: this.state.empId,
            getValueFromEvent: (e) => this.validateNumber(e, 'empId'),
            rules: [{
              required: true, message: 'Please input Employee Id',
            }],
          })(
            <Input disabled={this.state.empId ? true : false }/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Employee Name"
        >
          {getFieldDecorator('empName', {
            initialValue: this.state.empName,
            rules: [{
              required: true, message: 'Please input Employee Name',
            }],
          })(
            <Input/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Status"
          validateStatus={this.state.validateStatus}
          hasFeedback
        >
          {getFieldDecorator('status', {
            initialValue: this.state.status,
            rules: [{ required: true, message: 'Please select employee status' }],
          })(
            <Select
              placeholder="Select status"
              onChange={this.handleValidateStatus}
              id={this.state.validateStatus}
            >
              <Option value="Active">Active</Option>
              <Option value="Inactive">Inactive</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Country"
        >
          {getFieldDecorator('country', {
            initialValue: this.state.country,
            rules: [{
              required: true, message: 'Please enter Country',
            }],
          })(
            <Input/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Location"
        >
          {getFieldDecorator('location', {
            initialValue: this.state.location,
            rules: [{
              required: true, message: 'Please enter Location',
            }],
          })(
            <Input/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Mobile"
        >
          {getFieldDecorator('mobile', {
            initialValue: this.state.mobile,
            getValueFromEvent: (e) => this.validateNumber(e, 'mobile'),
            rules: [{
              required: true, message: 'Please enter Mobile number',
            }],
          })(
            <Input/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="E-mail"
        >
          {getFieldDecorator('email', {
            initialValue: this.state.email,
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Project Name"
        >
          {getFieldDecorator('projectName', {
            initialValue: this.state.projectName,
            rules: [{ required: true, message: 'Please select Project name' }],
          })(
            <Select
              placeholder="Select"
            >
              <Option value="GBM">GBM</Option>
              <Option value="ORI">ORI</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Project Role"
        >
          {getFieldDecorator('projectRole', {
            initialValue: this.state.projectRole,
            rules: [{ required: true, message: 'Please select Project role' }],
          })(
            <Select
              placeholder="Select"
            >
              <Option value="Team Member">Team member</Option>
              <Option value="Team Lead">Team Lead</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Tcs Designation"
        >
          {getFieldDecorator('tcsDesignation', {
            initialValue: this.state.tcsDesignation,
            rules: [{ required: true, message: 'Please select TCS designation' }],
          })(
            <Select
              placeholder="Select"
            >
              <Option value="C2">C2</Option>
              <Option value="C3A">C3A</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Laptop Id"
        >
          {getFieldDecorator('laptopId', {
            initialValue: this.state.laptopId
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Account Joining Date"
        >
          {getFieldDecorator('accountJoiningDate', {
            initialValue: moment(this.state.accountJoiningDate),
            rules: [{ type: 'object', required: true, message: 'Please select Acc. joining date!' }],
          })(
            <DatePicker />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Billing Start Date"
        >
          {getFieldDecorator('billingStartDate', {
            initialValue: moment(this.state.billingStartDate),
            rules: [{ type: 'object', required: true, message: 'Please select Billing date!' }],
          })(
            <DatePicker />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Bill Rate"
        >
          {getFieldDecorator('billRate', {
            getValueFromEvent: (e) => this.validateNumberWidthDecimal(e, 'billRate'),
            initialValue: this.state.billRate,
            rules: [{
              required: true, message: 'Please enter employee bill rate',
            }],
          })(
            <Input addonBefore={<Icon type="dollar" theme="outlined" />}/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="TCS Cost"
        >
          {getFieldDecorator('tcsCost', {
            initialValue: this.state.tcsCost,
            getValueFromEvent: (e) => this.validateNumberWidthDecimal(e, 'tcsCost'),
            rules: [{
              required: true, message: 'Please enter TCS Cost',
            }],
          })(
            <Input addonBefore="₹" />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">{this.state.empId ? 'Save' : 'Register Employee'}</Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(EmployeeForm);