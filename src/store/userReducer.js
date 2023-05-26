const initialState = {
    user: {
        name: '',
        age: 0,
        gender: ''
    }
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_NAME':
            return { ...state, user: { ...state.user, name: action.payload } }
        case 'UPDATE_AGE':
            return { ...state, user: { ...state.user, age: action.payload} }
        case 'UPDATE_GENDER':
            return { ...state, user: { ...state.user, gender: action.payload } }
        default:
            return state
    }
}

export default userReducer