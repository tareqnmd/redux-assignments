import { BOOKING_ADD, BOOKING_REMOVE } from './actionTypes';

const initialState = [];

const bookingReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case BOOKING_ADD:
			const addNewBooking = {
				id: state.length,
				from: payload.from,
				to: payload.to,
				date: payload.date,
				guests: payload.guests,
				class: payload.class,
			};
			return [...state, addNewBooking];
		case BOOKING_REMOVE:
			const removeBooking = [...state].filter((item) => payload !== item.id);
			return removeBooking;
		default:
			return state;
	}
};

export default bookingReducer;
