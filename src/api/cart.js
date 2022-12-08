import axios from 'axios'
const cartUrl = '/api/user/cart';

// get cart

export async function getCart() {
    try {
        const response = await axios.get(cartUrl, { headers: { authorization: localStorage.getItem('token') } });
        return response;
    } catch (error) {
        console.error(error)
    }
}

// post  to  cart

export async function posttocart(product) {
    try {
        const response = await axios.post(cartUrl, { product: product }, { headers: { authorization: localStorage.getItem('token') } });
        return response;
    } catch (error) {
        console.error(error)
    }
}


// remove from cart

export async function removefromcart(productID) {
    try {
        const response = await axios.delete(`${cartUrl}/${productID}`, { headers: { authorization: localStorage.getItem('token') } });
        return response;
    } catch (error) {
        console.error(error)
    }
}


// increment and decrement in product

export async function productAction(productID, action) {
    try {
        const response = await axios.post(`${cartUrl}/${productID}`, { action }, { headers: { authorization: localStorage.getItem('token') } });
        return response;
    } catch (error) {
        console.error(error)
    }
}