import axios from 'axios'

const prooductUrl = '/api/products';

export function getProductList() {
    return axios.get(`${prooductUrl}`);
}

export function getSingleProduct(prooductId) {
    return axios.get(`${prooductUrl}/${prooductId}`);
}
