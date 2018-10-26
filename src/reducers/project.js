const projectReducerDefaultState = {
    projectTypes: []
}

export default (state = projectReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_PROJECT_TYPES':
            return {
                ...state,
                projectTypes: action.projectTypes
            }
        default:
            return state;
    }
}

