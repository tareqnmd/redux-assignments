import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from '../features/blogs/blogsSlice';
import filterReducer from '../features/filter/filterSlice';

export const store = configureStore({
	reducer: {
		filter: filterReducer,
		blogs: blogsReducer,
	},
});
