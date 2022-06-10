export const cartInitialState = {
    cartproducts: [], // total items and their quantity
    totaDiscount: 0,
    totalMoney: 0,
    totalItems: 0,
}

export function CartReducer(state=cartInitialState, action) {
    switch (action.type) {
        // all actions are work on product card in cart
        case "ADD_TO_CART":
            return {
                ...state,
                cartproducts: [...state.cartproducts, action.payload]
            }


        case "REMOVE_FROM_CART":
            return {
                ...state,
                cartproducts: state.cartproducts.filter(product => product.id !== action.payload)
            }

        case "ADD TO WISHLIST":
            return {

            }

        case "QUANTITY":
            return {

            }

        case "INCREASE_QUANTITY":
            return {

            }

        case "DECREASE_QUANTITY":
            return {

            }

        // actions of price details card

        // total price of products with their quantity
        case "TOTAL_PRICE_CHECK":
            return {

            }

    }
}


