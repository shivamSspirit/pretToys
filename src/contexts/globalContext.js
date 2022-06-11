import React, { useState, useEffect, useContext } from "react";

export const Context = React.createContext("defaultContext");

export const useAuth = (param) => {
	const [authContext, setAuthContext] = useState(false);
	useEffect(() => {
		if (!param) {
			setAuthContext(false);
		} else {
			setAuthContext(true)
		}
	}, [param])
	return authContext;
}

const GlobalContext = ({ children }) => {
	const [globalStateProperties, setglobalStateProperties] = useState(null);  // object contains multiple global state variable

	const setDynamicProperties = (name, value) => {
		setglobalStateProperties({ ...globalStateProperties, [name]: value });   // set dynamic properties with this
	};


	let contextValue = {
		globalStateProperties,
		setDynamicProperties,
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