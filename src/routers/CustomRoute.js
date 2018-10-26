import React from 'react';
import {Route, Redirect, Link} from 'react-router-dom';
import { history } from './AppRouter';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu

export class CustomRoute extends React.Component {
    state = {
        collapsed: false,
      }
    
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
                            defaultSelectedKeys={[history.location.pathname.split('/').pop()]}
                            mode="inline"
                            className="side-menu"
                        >
                            <Menu.Item key="dashboard" className="side-menu__item">
                                <Link to="/dashboard">
                                    <Icon type="dashboard" theme="outlined" />
                                    <span>Reports</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="employeeList" className="side-menu__item">
                                <Link to="/employeeList">
                                    <Icon type="user-add" theme="outlined" />
                                    <span>Employee List</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="addEmployee" className="side-menu__item">
                                <Link to="/addEmployee">
                                    <Icon type="team" />
                                    <span>Add Employee</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="9" className="side-menu__item">
                                <Icon type="file" />
                                <span>File</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>{history.location.pathname.split('/').pop()}</Breadcrumb.Item>
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

// <SubMenu
//     key="sub1"
//     title={
//         <span>
//             <Icon type="user" />
//             <span>User</span>
//         </span>
//     }
// >
//     <Menu.Item key="3" className="side-subMenu__item">
//         Tom
//     </Menu.Item>
//     <Menu.Item key="4" className="side-subMenu__item">
//         Bill
//     </Menu.Item>
//     <Menu.Item key="5" className="side-subMenu__item">
//         Alex
//     </Menu.Item>
// </SubMenu>