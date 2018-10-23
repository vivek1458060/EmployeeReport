import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import employeesReducer from '../reducers/employees';

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            employees: employeesReducer
        }),
        composeEnhacers(applyMiddleware(thunk))
    )
    return store;
}