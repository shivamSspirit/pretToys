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
		const response = await cartApis?.posttocart(data);
		await dispatchCart({
			type: ActionTypes?.Cart?.ADD_TO_CART,
			payload: response?.data?.cart
		})
		console.log('money', cartState?.totalMoney)
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

	async function updateExistingProduct(productId, actionobj, product) {
		let response;
		if (actionobj?.action?.type === 'increment') {
			response = await cartApis?.productAction(productId, actionobj);
		} else {
			if (product?.qty === 1) {
				console.log('hello')
				response = await removeFromCart(productId, () => {
					console.log("removing product if quantity is one")
				})
			} else {
				console.log('nahi')
				response = await cartApis?.productAction(productId, actionobj);
			}
		}
		dispatchCart({
			type: ActionTypes?.Cart?.ADD_TO_CART,
			payload: response?.data.cart
		})
	}

	return {
		getCart,
		postToCart,
		removeFromCart,
		updateExistingProduct
	}

}










