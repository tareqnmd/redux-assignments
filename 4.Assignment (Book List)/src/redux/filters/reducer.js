import { FILTER_SEARCH, FILTER_TYPE } from './actionTypes';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case FILTER_SEARCH:
			return { ...state, searchText: payload };
		case FILTER_TYPE:
			return { ...state, type: payload };
		default:
			return state;
	}
};

export default reducer;
