export const cartInitialState = {
    cartproducts: [], // total items and their quantity
    totaDiscountonMrp: 0,
    totalMoneyMrp: 0,
    totalCartItems: 0,
    deliveryCahrges: 500
}

export function CartReducer(state = cartInitialState, action) {
    switch (action.type) {
        // all actions are work on product card in cart
        case "ADD_TO_CART":
            return {
                ...state,
                cartproducts: action?.payload,
                totalCartItems: action?.payload?.length,
                totalMoneyMrp: action?.payload?.reduce((cur, acc) => {
                    let currNumber = Number(cur?.price);
                    let accNumber = Number(acc?.price);
                    currNumber += accNumber;
                    const totalMoney = Number(currNumber);
                    console.log('tota', totalMoney)
                    return totalMoney;
                }),
                totaDiscountonMrp: action?.payload?.reduce((cur, acc) => {
                    let currNumber = Number(cur?.discount);
                    let accNumber = Number(acc?.discount);
                    currNumber += accNumber;
                    const totalDiscount = Number(currNumber);
                    return totalDiscount;
                })
            }


        // case "REMOVE_FROM_CART":
        //     return {
        //         ...state,
        //         cartproducts: state.cartproducts.filter(product => product.id !== action.payload)
        //     }

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


