import { useWishList } from "../contexts/wishlist-context";
import * as ActionTypes from '../constants/actions'
import * as wishApis from '../api/wishlist'


export function useWishActions() {

    const { dispatchWish } = useWishList();

    async function getWish(callback) {
        const response = await wishApis?.getWishlist();
        dispatchWish({
            type:ActionTypes?.Wislist?.ADD_TO_WISH,
            payload:response?.data?.wishlist
        })
        if(callback){
            return callback();
        }
    }

    async function addToWish(data, callback) {
        const response = await wishApis?.postTowish(data);
        dispatchWish({
            type:ActionTypes?.Wislist?.ADD_TO_WISH,
            payload:response?.data?.wishlist
        })
        if(callback){
            return callback();
        }
    }

    async function removeFromWish(data,callback){
        const response = await wishApis?.removeFromWish(data);
        dispatchWish({
            type:ActionTypes?.Wislist?.ADD_TO_WISH,
            payload:response?.data?.wishlist
        })
    }

    return{
        getWish,
        addToWish,
        removeFromWish
    }
}

