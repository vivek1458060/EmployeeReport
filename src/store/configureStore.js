import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import employeesReducer from '../reducers/employees';
import settingsReducer from '../reducers/settings';

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            employees: employeesReducer,
            settings: settingsReducer
        }),
        composeEnhacers(applyMiddleware(thunk))
    )
    return store;
}