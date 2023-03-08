import { BOOKING_ADD, BOOKING_REMOVE } from './actionTypes';

export const bookingAdd = (payload) => {
	return {
		type: BOOKING_ADD,
		payload,
	};
};

export const bookingRemove = (payload) => {
	return {
		type: BOOKING_REMOVE,
		payload,
	};
};
