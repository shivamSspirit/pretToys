import { useWishList } from "../contexts/wishlist-context";
import * as ActionTypes from '../constants/actions'
import * as wishApis from '../api/wishlist'


export function useWishActions() {

    const { wishState, dispatchWish } = useWishList();

    const ifProductinWishList = (product) => {
        const ifpro = wishState?.wishproducts?.find(item => item?._id === product?._id)
        if (ifpro?._id) {
            return true
        } else {
            return false
        }
    }

    async function getWish(callback) {
        const response = await wishApis?.getWishlist();
        dispatchWish({
            type: ActionTypes?.Wislist?.ADD_TO_WISH,
            payload: response?.data?.wishlist
        })
        if (callback) {
            return callback();
        }
    }

    async function addToWish(data, callback) {
        console.log('add') 
        if (ifProductinWishList(data)) {
            dispatchWish({
                type: ActionTypes?.Wislist?.ADD_TO_WISH,
                payload: wishState?.wishproducts
            })
            return;
        }
        const response = await wishApis?.postTowish(data);
        dispatchWish({
            type: ActionTypes?.Wislist?.ADD_TO_WISH,
            payload: response?.data?.wishlist
        })
        if (callback) {
            return callback();
        }
    }

    async function removeFromWish(data, callback) {
        console.log('remove')
        const response = await wishApis?.removeFromWish(data);
        console.log('res', response)
        dispatchWish({
            type: ActionTypes?.Wislist?.ADD_TO_WISH,
            payload: response?.data?.wishlist
        })
        if (callback) {
            return callback();
        }
    }

    return {
        getWish,
        addToWish,
        removeFromWish
    }
}

