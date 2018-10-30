import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import 'antd/dist/antd.css';
import "react-table/react-table.css";
import './styles/styles.scss';
import LoadingPage from './components/LoadingPage';
import configureStore from './store/configureStore';
import { startSetEmployees } from './actions/employees';
import { startSetFieldDetails } from './actions/settings';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

const renderApp = () => {
    ReactDOM.render(jsx, document.getElementById('app'));
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

store.dispatch(startSetFieldDetails());
store.dispatch(startSetEmployees()).then(() => {
    renderApp();
    if(history.location.pathname === '/') {
        history.push('/dashboard');
    }
}); 