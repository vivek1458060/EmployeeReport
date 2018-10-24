import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';

import createHistory from 'history/createBrowserHistory'

import CustomRoute from './CustomRoute';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import AddEmployeePage from '../components/AddEmployeePage';
import ReportPage from '../components/ReportPage';

export const history = createHistory();

const AppRouter = () => ( 
    <Router history={history}>
        <div>
            <Switch> 
                <CustomRoute path="/dashboard" component={DashboardPage}/>
                <CustomRoute path="/addEmployee" component={AddEmployeePage} />
                <CustomRoute path="/editEmployee" component={ReportPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;