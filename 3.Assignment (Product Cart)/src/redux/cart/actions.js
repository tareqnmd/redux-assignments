import { CART_ADD, CART_DELETE, CART_REMOVE } from './actionTypes';

export const cartAdd = (payload) => {
	return {
		type: CART_ADD,
		payload,
	};
};

export const cartRemove = (payload) => {
	return {
		type: CART_REMOVE,
		payload,
	};
};

export const cartDelete = (payload) => {
	return {
		type: CART_DELETE,
		payload,
	};
};
