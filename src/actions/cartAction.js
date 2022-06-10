import * as AuctionApis from '../apis/auction';
import * as ActionTypes from '../constants/actions';

export function getAuctionList(data, callback) {
	return async (dispatch) => {
		const response = await AuctionApis.getAuctionList(data);
		dispatch(setAuctionList(response.data.auctions));
		if (callback) {
			return callback();
		}
	};
}