import { BOOK_ADD, BOOK_DELETE, BOOK_EDIT } from './actionTypes';

export const bookAdd = (payload) => {
	return {
		type: BOOK_ADD,
		payload,
	};
};

export const bookEdit = (payload) => {
	return {
		type: BOOK_EDIT,
		payload,
	};
};

export const bookDelete = (payload) => {
	return {
		type: BOOK_DELETE,
		payload,
	};
};
