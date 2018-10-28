import React from 'react';
import { connect } from 'react-redux';

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
            const data = {};
            this.props.employees.forEach(({ status, projectName, margin }) => {
                if (status === 'Active') {
                    data[projectName] = data[projectName] || 0;
                    data[projectName] += margin;
                }
            })
            barChartData = Object.keys(data).map((projectName) => {
                return [projectName, data[projectName]]
            })
        } else {
            let totalMargin = 0;
            this.props.employees.forEach(({ margin, status }) => {
                if (status === 'Active') {
                    totalMargin += margin;
                }
            })
            barChartData = [["Account Level", totalMargin]]
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