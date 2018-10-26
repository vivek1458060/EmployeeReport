import React from 'react';
import { connect } from 'react-redux';

import ReactChartkick, { PieChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart);

export class SeniorJuniorRatio extends React.Component {
    render() {
        let totalSenior = 0;
        let totalJunior = 0;
        this.props.employees.forEach(({ tcsDesignation, status }) => {
            if(tcsDesignation && tcsDesignation === 'C2' && status === 'Active') {
                totalJunior += 1;
            } else if(tcsDesignation && status === 'Active') {
                totalSenior += 1;
            }
        })
        return (
            <PieChart data={[["Senior", totalSenior], ["Junior", totalJunior]]} />
        )
    }
}

const mapStateToProps = (state) => ({
    employees: state.employees
})

export default connect(mapStateToProps)(SeniorJuniorRatio);