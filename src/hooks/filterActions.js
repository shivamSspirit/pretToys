
import { useGlobal } from "../contexts/globalContext";
import { useFilter } from "../contexts/filter-context";
import * as ActionTypes from '../constants/actions'


export function useFiltershooks() {
    const { dispatchFilter, filterState } = useFilter()
    const { allproducts } = useGlobal()

    const addThisCategoryFilter = (target) => {
        if (target.checked) {
            let newFiltered = allproducts?.products?.filter(item => item?.categoryName === target.value)
            console.log('new filtered', newFiltered)
            dispatchFilter({
                type: ActionTypes?.Filter?.CATEGORY,
                payload: newFiltered
            })
        } else {
            dispatchFilter({
                type: ActionTypes?.Filter?.CATEGORY,
                payload: filterState?.filterCategory
            })
        }

    }

    return { addThisCategoryFilter }
}