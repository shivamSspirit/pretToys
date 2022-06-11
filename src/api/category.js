import axios from 'axios'

const CategoryUrl = '/api/categories';

export function getCategoryList() {
    return axios.get(`${CategoryUrl}`, (req, res) => { });
}

export function getSingleCategory(CategoryId) {
    return axios.get(`${`/api/category`}/${CategoryId}`, (req, res) => { });
}