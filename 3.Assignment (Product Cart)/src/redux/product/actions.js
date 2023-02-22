import { PRODUCT_ADD } from './actionTypes';

export const productAdd = (payload) => {
	return {
		type: PRODUCT_ADD,
		payload,
	};
};
