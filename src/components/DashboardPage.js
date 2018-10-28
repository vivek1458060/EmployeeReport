import React from 'react';
import SeniorJuniorRatio from './SeniorJuniorRatio';
import MarginGraph from './MarginGraph';
import { Row, Col } from 'antd';

export class DashboardPage extends React.Component {
    render() {
        return (
            <Row>
                <Col xs={{ span: 24 }} lg={{ span: 12  }}>
                    <MarginGraph />
                </Col>
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                    <SeniorJuniorRatio />
                </Col>
            </Row>
        )
    }
}

export default DashboardPage;