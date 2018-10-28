import React from 'react';
import { connect } from 'react-redux';

import ReactChartkick, { BarChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart);

export class SeniorJuniorRatio extends React.Component {
    render() {
        const data = {};
        this.props.employees.forEach(({ status, projectName, margin }) => {
            if (status === 'Active') {
                data[projectName] = data[projectName] || 0;
                data[projectName] += margin;
            }
        })
        const barChartData = Object.keys(data).map((projectName) => {
            return [projectName, data[projectName]]
        })
        return (
            <BarChart 
                data={barChartData} 
                xtitle="Project level Margin(Rs)"
                ytitle="Project(s)"
            />
        )
    }
}

const mapStateToProps = (state) => ({
    employees: state.employees
})

export default connect(mapStateToProps)(SeniorJuniorRatio);