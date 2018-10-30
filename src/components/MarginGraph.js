import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import ReactChartkick, { BarChart } from 'react-chartkick'
import Chart from 'chart.js'
ReactChartkick.addAdapter(Chart);

import { Radio } from 'antd';
const RadioGroup = Radio.Group;

export class SeniorJuniorRatio extends React.Component {
    state = {
        marginType: "projectLevelMargin"
    }
    onMarginTypeChange = (e) => {
        this.setState({
            marginType: e.target.value,
        });
    }
    render() {
        let barChartData = [];
        if (this.state.marginType === "projectLevelMargin") {
            const marginData = {};
            const employeeCountData = {};
            this.props.employees.forEach(({ status, projectName, margin }) => {
                if (status === 'Active') {
                    marginData[projectName] = marginData[projectName] || 0;
                    marginData[projectName] += margin;
                    employeeCountData[projectName] = employeeCountData[projectName] || 0;
                    employeeCountData[projectName] += 1;
                }
            })
            console.log(marginData, employeeCountData)
            barChartData = Object.keys(marginData).map((projectName) => {
                let totalMargin = 0;
                if(employeeCountData[projectName]) {
                    totalMargin = marginData[projectName] / employeeCountData[projectName];
                }
                return [projectName, _.round(totalMargin, 3)];
            })
        } else {
            let totalMargin = 0;
            let totalEmployee = 0;
            this.props.employees.forEach(({ margin, status }) => {
                if (status === 'Active') {
                    totalMargin += margin;
                    totalEmployee += 1;
                }
            })
            barChartData = totalEmployee ? [["Account Level", _.round(totalMargin/totalEmployee, 3)]] : []
        }
        return (
            <div>
                <RadioGroup onChange={this.onMarginTypeChange} value={this.state.marginType}>
                    <Radio value="projectLevelMargin">Project level</Radio>
                    <Radio value="accountLevelMargin">Account level</Radio>
                </RadioGroup>
                <BarChart
                    data={barChartData}
                    xtitle="Project level Margin(Rs)"
                    ytitle="Project(s)"
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    employees: state.employees
})

export default connect(mapStateToProps)(SeniorJuniorRatio);