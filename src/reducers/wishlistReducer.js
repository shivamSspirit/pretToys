export const wishInitialState = {
    wishproducts: [],
    wishCount: 0
}

export function WishListReducer(state = wishInitialState, action) {
    switch (action.type) {
        case "ADD_TO_WISH":
            return {
                ...state,
                wishproducts: action?.payload,
                wishCount: action?.payload?.length
            }
    }
}

