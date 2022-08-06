export const setCategory = (payload) => {
    return {
        type: "SET_CATEGORY",
        payload,
    };
};

export const addProduct = (payload) => {
    return {
        type: "ADD_PRODUCT",
        payload,
    };
};

export const removeProduct = (payload) => {
    return {
        type: "REMOVE_PRODUCT",
        payload,
    };
};
