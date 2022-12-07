import React, { useState, useContext, useReducer } from "react";
import { ProductsReducer, productInitialState } from "../reducers/productReducer";

export const Context = React.createContext("defaultContext");


const GlobalContext = ({ children }) => {
	const [globalStateProperties, setglobalStateProperties] = useState(null);  // object contains multiple global state variable
	const [allproducts, dispatchAllproducts] = useReducer(ProductsReducer, productInitialState)
	const [category, setCategory] = useState(null)
	const [currentCategory, setCurrentCategory] = useState(null)
	const [openmodal,setOpenModal] = useState(false);
	const [allAddress,setAllAddress] = useState([]);
	const [slideToggle,setSlideToggle] = useState(false);
	const [loader,setLoader] =  useState(false);
	const [searchquery,setSearchQuery] = useState('')

	const setDynamicProperties = (name, value) => {
		setglobalStateProperties({ ...globalStateProperties, [name]: value });   // set dynamic properties with this
	};

	const handlesearchChange=(e)=>{
        setSearchQuery(e.target.value)
    }


	let contextValue = {
		globalStateProperties,
		setDynamicProperties,
		allproducts, dispatchAllproducts,
		category, setCategory,
		currentCategory,
		setCurrentCategory,
		openmodal,setOpenModal,
		allAddress,setAllAddress,
		slideToggle,setSlideToggle,
		loader,setLoader,
		searchquery,
		setSearchQuery,
		handlesearchChange
	};

	return (
		<>
			<Context.Provider value={contextValue}>
				{children}
			</Context.Provider>
		</>
	);
};

export default GlobalContext;

export const useGlobal = () => useContext(Context)