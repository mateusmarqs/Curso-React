export const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0,
}

export function reducer(state, action) {
    switch (action.type) {
        case 'add2ToNumber':
            return { ...state, number: state.number + 2 }
        case 'login':
            return { ...state, user: {name: action.payload} }
        default:
            return state
    }
}