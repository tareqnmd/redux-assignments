import { apiSlice } from '../api/apiSlice';

export const tasksApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getTasks: builder.query({
			query: () => ({
				url: '/tasks',
			}),
		}),
		addTask: builder.mutation({
			query: (data) => ({
				url: '/tasks',
				method: 'POST',
				body: data,
			}),
		}),
	}),
});

export const { useGetTasksQuery } = tasksApi;
