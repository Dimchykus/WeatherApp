const initialState = {
    weather: null,
    isReady: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case  "SET_DATA":
            return {
                ...state,
                weather: action.payload
            };
        case  "SET_ISREADY":
            return {
                ...state,
                isReady: action.payload
            };
        default:
            return state;
    }
}
export default reducer;