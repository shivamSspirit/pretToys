export const productInitialState = {
    products: [],
    productCount: 0
}

export function ProductsReducer(state = productInitialState, action) {
    switch (action.type) {
        case "ADD_TO_PRODUCTS":
            return {
                ...state,
                products: action?.payload,
                productCount: action?.payload?.length
            }
    }
}
