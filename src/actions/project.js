import axios from 'axios';

export const setProjectTypes = (projectTypes = []) => ({
    type: 'SET_PROJECT_TYPES',
    projectTypes
})

export const startSetProjectTypes = () => {
    return (dispatch, getState) => {
        return axios.get('/project/types').then((response) =>{
            dispatch(setProjectTypes(response.data.projectTypes))
        }).catch((e) => {
            console.log(e);
        })
    }
}