import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import projectsSlice from '../features/projects/projectsSlice';
import tasksSlice from '../features/tasks/tasksSlice';

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		[projectsSlice.name]: projectsSlice.reducer,
		[tasksSlice.name]: tasksSlice.reducer,
	},
	middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware),
});
