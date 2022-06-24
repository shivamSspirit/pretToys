import * as cartApis from '../api/cart';
import * as ActionTypes from '../constants/actions';
import { useCart } from '../contexts/cart-context';


// const resetFunction = () => {
//     localStorage.removeItem("authToken");
//     localStorage.removeItem("authUser");
//     setAuthToken("");
//     setAuthUser(null);
//     dispatch({ type: CART_OPERATION, payload: { cart: [] } });
//     dispatch({ type: WISHLIST_OPERATION, payload: { wishlist: [] } });
//     dispatch({ type: SET_ADDRESS, payload: { address: [] } });
//     dispatch({ type: SET_ORDERS, payload: { orders: [] } });
//     navigate("/login");
//   };

export function useCartActions() {
	const { cartState, dispatchCart } = useCart();

	// const { cartproducts, totaDiscount, totalMoney, totalItems } = cartState;

	async function getCart(callback) {
		const response = await cartApis?.getCart();
		await dispatchCart({
			type: ActionTypes?.Cart?.ADD_TO_CART,
			payload: response?.data?.cart
		})
		if (callback) {
			return callback();
		}
	}

	async function postToCart(data, callback) {
		const response = await cartApis?.posttocart(data) // data===product
		await dispatchCart({
			type: ActionTypes?.Cart?.ADD_TO_CART,
			payload: response?.data?.cart
		})
		if (callback) {
			return callback();
		}
	}

	async function removeFromCart(data, callback) {
		const response = await cartApis?.removefromcart(data);
		await dispatchCart({
			type: ActionTypes?.Cart?.ADD_TO_CART,
			payload: response?.data?.cart
		})
	}


	async function updateExistingProduct(...data) {
		let response;
		if (data.type === 'increment') {
			response = await cartApis?.productAction(data?.productId, data?.actionInc);
		} else {
			if (data?.product?.quantity === 1) {
				response = await removeFromCart(data?.product?._id, () => {
					console.log("removing product if quantity is one")
				})
			} else {
				response = await cartApis?.productAction(data?.productId, data?.actionDec);
			}
		}
		dispatchCart({
			type: ActionTypes?.Cart?.ADD_TO_CART,
			payload: response?.data.cart
		})
	}


		// To increment or decrement cart quantity
		// 	const updateQuantity = async (e, product, type, setDisable) => {
		// 		e.preventDefault();
		// 		setDisable(true);
		// 		let response;
		// 		try {
		// 		  if (type === "increment")
		// 			response = await updateQuantityInCart(authToken, product._id, type);
		// 		  else {
		// 			if (product.qty === 1)
		// 			  response = await removeFromCart(authToken, product._id);
		// 			else
		// 			  response = await updateQuantityInCart(authToken, product._id, type);
		// 		  }
		// 		  dispatch({ type: CART_OPERATION, payload: { cart: response.cart } });
		// 		} finally {
		// 		  setDisable(false);
		// 		}
		// 	  };

		return {
			getCart,
			postToCart,
			removeFromCart,
			updateExistingProduct
		}
	
	}

	








