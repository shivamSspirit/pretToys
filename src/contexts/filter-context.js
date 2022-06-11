
import React, { createContext, useContext, useReducer } from "react";
import { intialFilterState, filterReducer } from "../reducers/filterReducer";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {

 const [filterState, dispatchFilter] = useReducer(filterReducer,intialFilterState);

    let contextVal = {
       filterState,
       dispatchFilter
    }

    return (
        <FilterContext.Provider value={contextVal}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilter = () => useContext(FilterContext);