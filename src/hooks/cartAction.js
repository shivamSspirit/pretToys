import * as cartApis from '../api/cart';
import * as ActionTypes from '../constants/actions';
import { useCart } from '../contexts/cart-context';
import { useToast } from './useToasts';


export function useCartActions() {
	const { cartState, dispatchCart } = useCart();
	const { showToast } = useToast();

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
		if (response) {
			showToast("success", "posting to cart")
			await dispatchCart({
				type: ActionTypes?.Cart?.ADD_TO_CART,
				payload: response?.data?.cart
			})
		}
		if (callback) {
			return callback();
		}
	}

	async function removeFromCart(data, callback) {
		const response = await cartApis?.removefromcart(data);
		if (response) {
			showToast('info', 'product remove from cart')
			await dispatchCart({
				type: ActionTypes?.Cart?.ADD_TO_CART,
				payload: response?.data?.cart
			})
		}
	}

	async function updateExistingProduct(productId, actionobj, product) {
		let response;
		if (actionobj?.action?.type === 'increment') {
			response = await cartApis?.productAction(productId, actionobj);
		} else {
			if (product?.qty === 1) {
				response = await removeFromCart(productId, () => {
					console.log("removing product if quantity is one")
				})
			} else {
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










