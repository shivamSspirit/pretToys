import axios from 'axios'

const CategoryUrl = '/api/categories';

export function getCategoryList() {
    return axios.get(`${CategoryUrl}`);
}

export function getSingleCategory(CategoryId) {
    return axios.get(`${`/api/category`}/${CategoryId}`);
}