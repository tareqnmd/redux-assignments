import { BOOK_ADD, BOOK_DELETE, BOOK_EDIT, BOOK_LOADED, BOOK_UPDATE_DATA } from './actionTypes';

export const bookLoaded = (payload) => {
	return {
		type: BOOK_LOADED,
		payload,
	};
};

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

export const bookUpdateData = (payload) => {
	return {
		type: BOOK_UPDATE_DATA,
		payload,
	};
};
