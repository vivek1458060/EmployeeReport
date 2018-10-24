import React from 'react';
import {Route, Redirect, Link} from 'react-router-dom';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu

export class CustomRoute extends React.Component {
    state = {
        collapsed: false,
      };
    
      onCollapse = (collapsed) => {
        this.setState({ collapsed });
      }
    
    render() {
        return (
            <Layout style={{ minHeight: '100vh', maxWidth: '1100px', margin: 'auto' }}>
                <Header>
                    <div className="logo">myLogo</div>
                </Header>
                <Layout>
                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                        breakpoint="lg"
                        width={260}
                    >
                        <Menu
                            theme="dark"
                            defaultSelectedKeys={["1"]}
                            mode="inline"
                            className="side-menu"
                        >
                            <Menu.Item key="1" className="side-menu__item">
                                <Link to="/dashboard">
                                    <Icon type="team" />
                                    <span>Employees</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2" className="side-menu__item">
                                <Link to="/addEmployee">
                                    <Icon type="user-add" theme="outlined" />
                                    <span>Add Employee</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="3" className="side-menu__item">
                                <Link to="/editEmployee">
                                    <Icon type="dashboard" theme="outlined" />
                                    <span>Reports</span>
                                </Link>
                            </Menu.Item>
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <Icon type="user" />
                                        <span>User</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="3" className="side-subMenu__item">
                                    Tom
                                </Menu.Item>
                                <Menu.Item key="4" className="side-subMenu__item">
                                    Bill
                                </Menu.Item>
                                <Menu.Item key="5" className="side-subMenu__item">
                                    Alex
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                        <Icon type="team" />
                                        <span>Team</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="6" className="side-subMenu__item">
                                    Team 1
                                </Menu.Item>
                                <Menu.Item key="8" className="side-subMenu__item">
                                    Team 2
                                </Menu.Item>
                            </SubMenu>
                            <Menu.Item key="9" className="side-menu__item">
                                <Icon type="file" />
                                <span>File</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb>
                            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                                <Route {...this.props.rest} component={this.props.component} />
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            Design ©2018 Created by Vivek mishra
                        </Footer>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default CustomRoute;