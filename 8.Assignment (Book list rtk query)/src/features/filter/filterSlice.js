import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	searchText: '',
	featured: 'all',
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		searchFilter: (state, action) => {
			state.searchText = action.payload;
		},
		featuredType: (state, action) => {
			state.featured = action.payload;
		},
	},
});

export default filterSlice.reducer;
export const { searchFilter, featuredType } = filterSlice.actions;
