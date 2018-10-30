import axios from 'axios';

export const setFieldDetails = (data = []) => ({
    type: 'SET_FIELD_DETAILS',
    data
})

export const startSetFieldDetails = () => {
    return (dispatch, getState) => {
        return axios.get('/field').then((response) => {
            dispatch(setFieldDetails(response.data))
        }).catch((e) => {
            console.log(e);
        })
    }
}