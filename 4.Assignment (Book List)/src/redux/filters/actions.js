import { FILTER_SEARCH, FILTER_TYPE } from './actionTypes';

export const filterSearch = (payload) => {
	return {
		type: FILTER_SEARCH,
		payload,
	};
};

export const filterType = (payload) => {
	return {
		type: FILTER_TYPE,
		payload,
	};
};
