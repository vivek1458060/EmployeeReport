import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';

import createHistory from 'history/createBrowserHistory'

import CustomRoute from './CustomRoute';
import EmployeeListPage from '../components/EmployeeListPage';
import AddEmployeePage from '../components/AddEmployeePage';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';

export const history = createHistory();

const AppRouter = () => ( 
    <Router history={history}>
        <div>
            <Switch> 
                <CustomRoute path="/dashboard" component={DashboardPage}/>
                <CustomRoute path="/employeeList" component={EmployeeListPage} />
                <CustomRoute path="/addEmployee" component={AddEmployeePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;