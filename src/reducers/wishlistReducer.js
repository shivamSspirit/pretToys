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
        // case "REMOVE_FROM_WISH":
        //     return {
        //         ...state,
        //         wishproducts: state.wishproducts.filter((r) => r.id !== action.payload)
        //     }

        case "MOVE_TO_CART":
            return {

            }
    }
}

