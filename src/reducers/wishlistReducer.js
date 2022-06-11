export const wishInitialState = {
    wishproducts: [],
    wishCount: 0
}

export function WishListReducer(state = wishInitialState, action) {
    switch (action.type) {
        case "ADD_TO_WISH":
            if (state.wishproducts.find(item => item.id === action.payload.id)) {
                return {
                    ...state,
                    wishproducts:[...state.wishproducts]
                }
            } else {
                return {
                    ...state,
                    wishproducts: [...state.wishproducts, action.payload]
                }
            }
        case "REMOVE_FROM_WISH":
            return {
                ...state,
                wishproducts: state.wishproducts.filter((r) => r.id !== action.payload)
            }

        case "MOVE_TO_CART":
            return {

            }
    }
}

