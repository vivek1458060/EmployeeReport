import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import 'antd/dist/antd.css';
import "react-table/react-table.css";
import './styles/styles.scss';
import configureStore from './store/configureStore';
import { startSetEmployees } from './actions/employees';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
    document.getElementById('app')
);

store.dispatch(startSetEmployees()); 
// history.push('/dashboard');