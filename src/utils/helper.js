export const SortbyPrice = (prevProduct, minprice) => {
    return prevProduct.filter((product) => product.price >= minprice)
}

export const sortByCategory = (prevProduct, filterCategory) => {
    if (filterCategory.length !== 0) {
        if (prevProduct.length > 0) {
            return prevProduct.filter((item) => {
                return filterCategory.indexOf(item.categoryName) > -1;
            });
        } else {
            return prevProduct;
        }
    } else {
        return prevProduct;
    }
};

export const sortByRatings = (prevProduct, minratings) => {
    return prevProduct.filter((product) => product.ratings >= minratings);
};


export function sortByOreder(prevProduct, sortBylth) {
    if (sortBylth && sortBylth === "HIGH_TO_LOW") {
        return [...prevProduct.sort((a, b) => (b.price) - (a.price))];
    }
    if (sortBylth && sortBylth === "LOW_TO_HIGH") {
        return [...prevProduct.sort((a, b) => (a.price)- (b.price))];
    }
    return prevProduct;
}

