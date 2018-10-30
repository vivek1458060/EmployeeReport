const settingsReducerDefaultState = {
    projectTypes: [],
    empTypes: []
}

export default (state = settingsReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_FIELD_DETAILS':
            return {
                ...state,
                projectTypes: action.data.projectTypes,
                empTypes: action.data.empTypes
            }
        default:
            return state;
    }
}

