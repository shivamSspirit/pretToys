export const cartInitialState = {
    cartproducts: [], // total items and their quantity
    totalMoney: 0,
    totalCartItems: 0,
    deleveryCharges:500,
    selectedAddress:null
}

export function CartReducer(state = cartInitialState, action) {
    switch (action.type) {
        case "ADD_TO_CART":
        let sum=0;
        const val = action?.payload;
        let totalsumarr = val?.map(item=>Number(item?.price)*Number(item?.qty));
        totalsumarr?.forEach(item=>sum+=item);
        state.totalMoney = sum

            return {
                ...state,
                cartproducts: action?.payload,
                totalCartItems: action?.payload?.length,
                totalMoney:  state.totalMoney,
                deleveryCharges:state.deleveryCharges,
            }


        case "SET_SELECTED_ADDRESS":
            return {
                ...state,
                selectedAddress:action.payload
            }

            case "UNSET_SELECTED_ADDRESS":
                return {
                    ...state,
                    selectedAddress:null
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

        case "TOTAL_PRICE_CHECK":
            return {

            }

    }
}


