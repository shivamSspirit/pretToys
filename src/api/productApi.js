import axios from 'axios'

const prooductUrl = '/api/products';

export function getProductList() {
    return axios.get(`${prooductUrl}`, (req, res) => {

    });
}

export function getSingleProduct(prooductId) {
    return axios.get(`${prooductUrl}/${prooductId}`, (req, res) => {
    });
}
