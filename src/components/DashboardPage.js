import React from 'react';
import SeniorJuniorRatio from './SeniorJuniorRatio';
import MarginGraph from './MarginGraph';
import { Row, Col, Tabs  } from 'antd';

const TabPane = Tabs.TabPane;

export class DashboardPage extends React.Component {
    render() {
        return (
            <Tabs defaultActiveKey="1">
                <TabPane tab="TBD" key="1">
                    <Row>
                        <Col xs={{ span: 24 }} lg={{ span: 12  }}>
                            <MarginGraph />
                        </Col>
                        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                            <SeniorJuniorRatio />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tab="New Feature" key="2">
                    <div>Content to be decided!</div>
                </TabPane>
            </Tabs>
        )
    }
}

export default DashboardPage;