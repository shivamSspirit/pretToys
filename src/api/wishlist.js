import axios from 'axios'
const wishlistUrl = '/api/user/wishlist';

export async function getWishlist() {
    try {
        const response = await axios.get(wishlistUrl, { headers: { authorization: localStorage.getItem('token') } });
        return response;
    } catch (error) {
        console.error(error)
    }
}


export async function postTowish(product) {
    const val = localStorage.getItem('token')
    try {
        const response = await axios.post(wishlistUrl, { data: product }, { headers: { authorization: `${val}` } });
        return response;
    } catch (error) {
        console.error(error)
    }
}


export async function removeFromWish(productId) {
    try {
        const response = await axios.delete(`${wishlistUrl}/${productId}`, { headers: { authorization: localStorage.getItem('token') } });
        return response;
    } catch (error) {
        console.error(error)
    }
}