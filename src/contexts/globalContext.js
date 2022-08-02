import React, { useState, useEffect, useContext, useReducer } from "react";
import { ProductsReducer, productInitialState } from "../reducers/productReducer";

export const Context = React.createContext("defaultContext");

// export const useAuth = (param) => {
// 	const [authContext, setAuthContext] = useState(false);

// 	useEffect(() => {
// 		if (!param) {
// 			setAuthContext(false);
// 		} else {
// 			setAuthContext(true)
// 		}
// 	}, [param])
// 	return authContext;
// }

const GlobalContext = ({ children }) => {
	const [globalStateProperties, setglobalStateProperties] = useState(null);  // object contains multiple global state variable
	const [allproducts, dispatchAllproducts] = useReducer(ProductsReducer, productInitialState)
	const [category, setCategory] = useState(null)
	const [currentCategory, setCurrentCategory] = useState(null)

	const [openmodal,setOpenModal] = useState(false);

	const [allAddress,setAllAddress] = useState([])

	const setDynamicProperties = (name, value) => {
		setglobalStateProperties({ ...globalStateProperties, [name]: value });   // set dynamic properties with this
	};


	let contextValue = {
		globalStateProperties,
		setDynamicProperties,
		allproducts, dispatchAllproducts,
		category, setCategory,
		currentCategory,
		setCurrentCategory,
		openmodal,setOpenModal,
		allAddress,setAllAddress

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