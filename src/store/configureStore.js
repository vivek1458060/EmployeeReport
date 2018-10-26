import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import employeesReducer from '../reducers/employees';
import projectReducer from '../reducers//project';

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            employees: employeesReducer,
            project: projectReducer
        }),
        composeEnhacers(applyMiddleware(thunk))
    )
    return store;
}