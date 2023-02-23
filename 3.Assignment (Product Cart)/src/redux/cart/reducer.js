import { CART_ADD, CART_DELETE, CART_REMOVE } from './actionTypes';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case CART_ADD:
			if (state.findIndex((item) => item.id === payload.id) !== -1) {
				return state.map((item) => {
					if (item.id === payload.id) {
						return { ...item, itemInCart: item.itemInCart + 1 };
					}
					return item;
				});
			} else {
				return [...state, { ...payload, itemInCart: 1 }];
			}
		case CART_REMOVE:
			if (state.find((item) => item.id === payload)?.itemInCart > 1) {
				return state.map((item) => {
					if (item.id === payload) {
						return { ...item, itemInCart: item.itemInCart - 1 };
					}
					return item;
				});
			} else {
				return state.filter((item) => item.id !== payload);
			}
		case CART_DELETE:
			return state.filter((item) => item.id !== payload);
		default:
			return state;
	}
};
export default reducer;
