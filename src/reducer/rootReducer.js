const INITIAL_STATE = {
    userName : ''
}

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "@user/login":
            return {
                ...state,
                userName: action.payload
            }
        case "@user/logout":
            return {
                ...state,
                userName: ''
            }
        default:
            return state;
    }
}

export default rootReducer;