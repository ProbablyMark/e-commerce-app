const INITIAL_STATE = {
    currentCategory: 0,

    productList: {},
};

export function categoryReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SET_CATEGORY":
            return {
                ...state,
                currentCategory: action.payload,
            };

        case "ADD_PRODUCT":
            let name = action.payload.name;
            if (!state.productList.hasOwnProperty(name)) {
                return { ...state, productList: { ...state.productList, [name]: action.payload } };
            }
        case "REMOVE_PRODUCT":
            delete state.productList[action.payload];

            return { ...state };

        default:
            return state;
    }
}
