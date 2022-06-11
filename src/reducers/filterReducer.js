export const intialFilterState = {
    maxprice: 15000,
    minprice: 1000,
    filterCategory: [],
    minratings: 1,
    sortBylth: "LOW_TO_HIGH",
}

export function filterReducer(state, action) {
    switch (action.type) {
        case "CATEGORY":
            if (action.payload.checked) {
                return {
                    ...state,
                    filterCategory: [...state.filterCategory, action.payload.value]
                }
            } else {
                return {
                    ...state,
                    filterCategory: [...state.filterCategory.filter((category) => {
                        return category !== action.payload.value
                    })]
                }
            }
        case "RATINGS":
            return {
                ...state,
                minratings: action.payload
            }
        case "HIGH_TO_LOW":
            return {
                ...state,
                sortBylth: action.payload

            }
        case "LOW_TO_HIGH":
            return {
                ...state,
                sortBylth: action.payload
            }
        case "MAX_PRICE":
            return {
                ...state,
                maxprice: action.payload,
            }
        case "MIN_PRICE":
            return {
                ...state,
                minprice: action.payload
            }
    }
}
