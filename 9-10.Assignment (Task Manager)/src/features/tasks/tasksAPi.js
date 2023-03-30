import { apiSlice } from '../api/apiSlice';

export const tasksApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getTasks: builder.query({
			query: () => ({
				url: '/tasks',
			}),
		}),
	}),
});

export const { useGetTasksQuery } = tasksApi;
