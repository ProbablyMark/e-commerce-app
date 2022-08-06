const INITIAL_STATE = {
    currentCurrency: 0,
    availableCategory: [0, 1, 2, 3, 4, 5],
};

export function currencyReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SET_CURRENCY":
            return {
                ...state,
                currentCurrency: action.payload,
            };
        default:
            return state;
    }
}
